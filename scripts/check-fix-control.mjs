import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const root=new URL('../',import.meta.url);
const data=JSON.parse(await readFile(new URL('specs/007-release-qa/cases.json',root),'utf8'));
const inventory=JSON.parse(await readFile(new URL('specs/005-final-traceability/inventory.json',root),'utf8'));
const doc=await readFile(new URL('CONTROL_DE_FIXES.md',root),'utf8');
assert(data.cases.length>=20);
assert.equal(new Set(data.cases.map(c=>c.id)).size,data.cases.length,'ID QA duplicado.');
assert.match(data.coordinatorIssue,/^https:\/\/github\.com\/LuisMI2005-sudo\/ProyectoCertiIA\/issues\/\d+$/);
assert(doc.includes(data.coordinatorIssue));
for(const c of data.cases){
  assert.match(c.id,/^QA-\d{3}$/);
  assert(['P0','P1','P2'].includes(c.priority));
  assert(c.type!=='Bug confirmado'||c.confirmedBug===true);
  assert.equal(typeof c.confirmedBug,'boolean');
  assert(typeof c.area==='string'&&c.area.trim().length>=2,`${c.id}: área incompleta.`);
  for(const field of ['title','type','environment','observed','expected','verification'])assert(typeof c[field]==='string'&&c[field].length>5,`${c.id}: ${field} incompleto.`);
  assert(c.reproduction.length>=3);
  const tracked=inventory.records.find(row=>row.id===c.trackingHu);
  assert(tracked,`${c.id}: HU desconocida.`);
  assert.equal(c.issue,tracked.issue);
  const related=inventory.records.find(row=>row.id===c.hu);
  assert(related);
  assert.equal(c.relatedIssue,related.issue);
  assert(doc.includes(`### ${c.id}`));
  assert(doc.includes(c.title));
  assert(doc.includes(c.expected));
  assert(doc.includes(c.verification));
  if(c.state==='Cerrado'){
    assert(c.owner&&c.reviewer,`${c.id}: cierre sin responsable/revisor.`);
    assert(typeof c.evidenceRecorded==='string'&&c.evidenceRecorded.length>20,`${c.id}: cierre sin evidencia registrada.`);
  }
  if(c.confirmedBug)assert(c.evidenceRecorded,`${c.id}: bug confirmado sin evidencia.`);
}
for(const row of inventory.records.filter(row=>row.state!=='Completada técnica'))assert(data.cases.some(c=>c.trackingHu===row.id),`HU-${row.id}: seguimiento abierto sin ficha QA.`);
assert.equal(data.confirmedBugs,data.cases.filter(c=>c.confirmedBug).length);
console.log(`Control de fixes: ${data.cases.length} casos únicos; todas las HU abiertas cubiertas; ${data.confirmedBugs} bugs confirmados en este registro. Reproducción, expectativas y verificación comprobadas estructuralmente; no se ejecutan pruebas de producto.`);
