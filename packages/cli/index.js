#!/usr/bin/env node
'use strict';

const { createCore } = require('@demonorepo-pnpm/core');
const { formatMessage } = require('@demonorepo-pnpm/utils');

const [, , command, ...args] = process.argv;

const core = createCore({ name: args[0] || 'world' });

switch (command) {
  case 'greet':
    console.log(core.greet());
    break;
  case 'log':
    core.log(args.join(' ') || 'Hello from CLI!');
    break;
  default:
    console.log(formatMessage('cli', `Unknown command: ${command || '(none)'}`));
    console.log('Usage: demonorepo <greet|log> [args...]');
}
