'use strict';

const DEFAULT_CONFIG = {
  logLevel: 'info',
  timeout: 4000,
  retries: 3,
};

/**
 * Returns the merged configuration object.
 * @param {object} overrides
 * @returns {object}
 */
function getConfig(overrides = {}) {
  return { ...DEFAULT_CONFIG, ...overrides };
}

module.exports = { DEFAULT_CONFIG, getConfig };
