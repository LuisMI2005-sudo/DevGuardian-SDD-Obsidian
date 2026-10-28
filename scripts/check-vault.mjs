import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const failures = [];
const ignored = new Set(['.git', '.obsidian', '.agents', '.specify', 'node_modules']);
async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) { failures.push(`No se permiten symlinks en la entrega: ${path.relative(root, filename)}`); continue; }
    if (entry.isDirectory() && !ignored.has(entry.name)) files.push(...await walk(filename));
    else if (entry.isFile() && /\.(?:md|canvas)$/.test(entry.name)) files.push(filename);
  }
  return files;
}
async function localTarget(filename, link, vaultRelative = false) {
  const clean = link.replace(/^<|>$/g, '').split('#')[0];
  if (!clean || /^[a-z][a-z\d+.-]*:/i.test(clean)) return;
  const destination = path.resolve(vaultRelative ? root : path.dirname(filename), decodeURIComponent(clean));
  const relative = path.relative(root, destination);
  if (relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative) || !(await stat(destination).catch(() => null)))
    failures.push(`${path.relative(root, filename)}: destino inexistente o externo: ${link}`);
}
let markdown = 0, canvases = 0, diagrams = 0;
for (const filename of await walk(root)) {
  const content = await readFile(filename, 'utf8');
  if (filename.endsWith('.canvas')) {
    canvases++;
    const canvas = JSON.parse(content);
    const ids = new Set(canvas.nodes.map(node => node.id));
    if (ids.size !== canvas.nodes.length) failures.push(`${filename}: nodos duplicados`);
    for (const node of canvas.nodes) if (node.type === 'file') await localTarget(filename, node.file, true);
    for (const edge of canvas.edges) if (!ids.has(edge.fromNode) || !ids.has(edge.toNode)) failures.push(`${filename}: arista sin nodo`);
    continue;
  }
  markdown++;
  for (const match of content.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) await localTarget(filename, match[1]);
  let language = null;
  for (const line of content.split(/\r?\n/)) {
    if (language === null && line.startsWith('```')) { language = line.slice(3).trim(); if (language === 'mermaid') diagrams++; }
    else if (language !== null && line.trim() === '```') language = null;
  }
  if (language !== null) failures.push(`${filename}: cerca de código sin cerrar`);
}
const graph = JSON.parse(await readFile(path.join(root, '.obsidian/graph.json'), 'utf8'));
if (!Array.isArray(graph.colorGroups) || graph.colorGroups.length < 6) failures.push('Faltan grupos de colores del grafo.');
for (const group of graph.colorGroups ?? []) if (typeof group.query !== 'string' || !Number.isInteger(group.color?.rgb)) failures.push('Grupo de grafo inválido.');
if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
else console.log(`Bóveda: ${markdown} Markdown, ${canvases} Canvas, ${diagrams} Mermaid y ${graph.colorGroups.length} grupos comprobados. Validación estructural.`);
