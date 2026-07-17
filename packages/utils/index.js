'use strict';

/**
 * Formats a message with a prefix.
 * @param {string} prefix
 * @param {string} message
 * @returns {string}
 */
function formatMessage(prefix, message) {
  return `[${prefix}] ${message}`;
}

/**
 * Returns a greeting string.
 * @param {string} name
 * @returns {string}
 */
function greet(name) {
  return `Hello there, ${name}!`;
}

module.exports = { formatMessage, greet };
