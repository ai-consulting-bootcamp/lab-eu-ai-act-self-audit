// Offline replay of a trusted, pinned CompanyScope workflow export. No network.
const fs = require('node:fs');
const path = require('node:path');
const workflow = JSON.parse(fs.readFileSync(path.join(__dirname, 'companyscope_workflow.json'), 'utf8'));
const fixture = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const code = workflow.nodes.find(n => n.name === 'Validate & Render Report').parameters.jsCode;
const run = new Function('$input', '$execution', '$', code);
const data = { 'Assemble Evidence': fixture.evidence, 'Normalize Input': { entrypoint: 'form' } };
const results = {};
for (const [name, publicSource] of [['valid_source', 'WEB-1'], ['wrong_source_type', 'REGISTRY-1'], ['non_supporting_source', 'WEB-1']]) {
  const report = structuredClone(fixture.report);
  report.public_findings[0].source_id = publicSource;
  if (name === 'non_supporting_source') report.public_findings[0].finding = 'This fixture opened a branch on Mars.';
  const response = {status: 'completed', model: 'offline-fixture', output: [
    { content: [{type: 'output_text', text: JSON.stringify(report)}] }] };
  const row = run({first: () => ({json: response})}, {id: 'offline-audit'},
    key => ({first: () => ({json: data[key]})}))[0].json;
  results[name] = row.ok ? {ok: true, validation: row.validation, report_markdown: row.report_markdown}
    : {ok: false, error_code: row.error_code, failed_field: row.failed_field};
}
if (!results.valid_source.ok || results.wrong_source_type.error_code !== 'public_finding_source_invalid'
    || !results.non_supporting_source.ok) throw Error('Unexpected validator behavior');
console.log(JSON.stringify(results, null, 2));
