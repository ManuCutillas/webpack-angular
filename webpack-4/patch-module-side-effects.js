const fs = require('fs');
const path = require('path');

const rxjsPackageJsonPath = path.resolve(__dirname, './node_modules/rxjs/package.json');
const rxjsPackageJson = fs.readFileSync(rxjsPackageJsonPath, { encoding: 'utf-8' });
const newRxjsPackageJson = rxjsPackageJson
  .replace(/"deprecated": false,\r?\n/, '"deprecated": false, "sideEffects": false,\n');
fs.writeFileSync(rxjsPackageJsonPath, newRxjsPackageJson, { encoding: 'utf-8' })
