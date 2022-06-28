"use strict";
/** @format */
module.exports = {
  singleQuote: true,
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
