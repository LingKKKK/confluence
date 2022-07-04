"use strict";
/** @format */
module.exports = {
  singleQuote: false,
  trailingComma: 'none',
  printWidth: 100,
  proseWrap: 'never',
  tabWidth: 2,
  endOfLine: 'lf',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: 'document.ejs',
      options: {
        parser: 'html',
      },
    },
  ],
};
