'use strict';

const { formatMessage, greet } = require('@demonorepo-pnpm/utils');

/**
 * Initialises the core library and returns a context object.
 * @param {object} options
 * @returns {{ greet: (name: string) => string, log: (msg: string) => void }}
 */
function createCore(options = {}) {
  const name = options.name || 'world';

  return {
    greet: () => greet(name),
    log: (message) => console.log(formatMessage('core', message)),
  };
}

module.exports = { createCore };
