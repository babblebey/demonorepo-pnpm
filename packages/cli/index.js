#!/usr/bin/env node
'use strict';

const { createCore } = require('@demonorepo-pnpm/core');
const { formatMessage } = require('@demonorepo-pnpm/utils');
const { version } = require('./package.json');

const [, , command, ...args] = process.argv;

const core = createCore({ name: args[0] || 'world' });

function printUsage() {
  console.log('Usage: demonorepo <command> [args...]');
  console.log('');
  console.log('Commands:');
  console.log('  greet [name]         Print a greeting');
  console.log('  log [message...]     Print a formatted log message');
  console.log('  version              Show CLI version');
}

switch (command) {
  case 'version':
  case '-v':
  case '--version':
    console.log(version);
    break;
  case 'greet':
    console.log(core.greet());
    break;
  case 'log':
    core.log(args.join(' ') || 'Hello from CLI!');
    break;
  case undefined:
    printUsage();
    break;
  default:
    console.log(formatMessage('cli', `Unknown command: ${command || '(none)'}`));
    printUsage();
}
