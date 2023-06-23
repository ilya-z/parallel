/**
 * NOTE: This config is purely for IDE integration. Rules can be overridden here and then fed into the
 * plugin-cli.config.js
 */

module.exports = {
  extends: '@appfabric/eslint-config-appfabric',
  rules: {
    // Your overridden rules
    'require-jsdoc': 0,
    'valid-jsdoc': 0,
    'multiline-comment-style': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
