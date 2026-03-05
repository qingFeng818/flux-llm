#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const packagePath = path.join(__dirname, '..', 'package');
if (fs.existsSync(packagePath)) {
  fs.rmSync(packagePath, { recursive: true, force: true });
}
