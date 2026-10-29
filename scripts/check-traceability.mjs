import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const root = new URL('../', import.meta.url);
const directory = new URL('specs/005-final-traceability/', root);
const inventory = JSON.parse(await readFile(new URL('inventory.json', directory), 'utf8'));
const issues = JSON.parse(await readFile(new URL('issues.json', directory), 'utf8'));
const pullRequests = JSON.parse(await readFile(new URL('pull-requests.json', directory), 'utf8'));
const backlog = await readFile(new URL('backlog.md', directory), 'utf8');
const matrix = await readFile(new URL('traceability.md', directory), 'utf8');
const hash = value => createHash('sha256').update(String(value).replaceAll('\r\n', '\n')).digest('hex');
assert.equal(hash(backlog), inventory.documentBacklogSha256, 'La copia del backlog cambió sin actualizar la evidencia.');
assert.equal(hash(matrix), inventory.matrixSha256, 'La matriz cambió sin actualizar su inventario.');
const sections = [...backlog.matchAll(/^### HU-(\d+) (.+)$/gm)];
assert.equal(sections.length, 51);
assert.equal(inventory.records.length, 51);
assert.equal(issues.length, 51);
assert.equal(new Set(issues.map(issue => issue.number)).size, 51, 'Issue duplicado.');
const counts = {};
for (let index = 0; index < 51; index++) {
  const item = inventory.records[index];
  const id = index + 1;
  const label = `HU-${String(id).padStart(2, '0')}`;
  assert.equal(item.id, id);
  assert.equal(Number(sections[index][1]), id);
  assert.equal(sections[index][2], item.title);
  const section = backlog.slice(sections[index].index, sections[index + 1]?.index ?? backlog.length);
  assert(section.includes(`**Estado:** ${item.state}`), `${label}: estado divergente.`);
  const issue = issues.find(entry => entry.id === id);
  assert.equal(item.issue, issue.url);
  assert.equal(issue.state, item.state === 'Completada técnica' ? 'closed' : 'open');
  assert.match(item.issue, /^https:\/\/github\.com\/LuisMI2005-sudo\/ProyectoCertiIA\/issues\/\d+$/);
  assert(matrix.includes(`### ${label}`));
  assert(matrix.includes(item.issue));
  assert(Array.isArray(item.pullRequests) && item.pullRequests.length > 0, `${label}: faltan PRs relacionados.`);
  for (const relation of item.pullRequests) {
    const pr = pullRequests.requests.find(entry => entry.url === relation.url);
    assert(pr, `${label}: PR sin instantánea verificada.`);
    assert(pr.files.includes(relation.proof), `${label}: el archivo citado no pertenece al PR.`);
    assert.equal(relation.merged, pr.merged);
    assert.equal(relation.state, pr.state);
    assert(relation.scope.length > 20, `${label}: falta aclarar el alcance del vínculo.`);
    assert(matrix.includes(relation.url));
  }
  for (const link of [item.sourceUrl, item.evidenceUrl]) {
    assert.match(link, /^https:\/\/github\.com\/[^/]+\/[^/]+\/blob\/[a-f\d]{40}\//);
    assert(matrix.includes(link));
  }
  counts[item.state] = (counts[item.state] ?? 0) + 1;
}
for (const [state, count] of Object.entries(counts)) assert(backlog.includes(`| ${state} | ${count} |`));
// In a multi-repository local workspace, also check the canonical source.
const canonical = new URL('../ProyectoCertiIA/backlog.md', root);
try {
  const source = await readFile(canonical);
  assert.equal(hash(source), inventory.backendBacklogSha256, 'El backlog backend y la copia documental divergen.');
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
console.log(`Trazabilidad: 51 HU únicas, 51 issues, vínculos a PRs con archivos/estados, métricas, enlaces por SHA y copias comprobados. ${JSON.stringify(counts)}. No sustituye aceptación humana ni comprueba estados remotos posteriores al corte.`);
