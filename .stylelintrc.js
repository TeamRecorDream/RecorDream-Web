module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-config-clean-order',
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  customSyntax: '@stylelint/postcss-css-in-js',
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'order/properties-alphabetical-order': true,
    'no-empty-source': null,
    'rule-empty-line-before': null,
    'selector-list-comma-newline-after': null,
    'no-descending-specificity': null,
  },
};
