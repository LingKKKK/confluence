/**
 * @description code-block menu
 */

import CodeBlockMenu from './CodeBlockMenu'

export const codeBlockMenuConf = {
  key: 'codeBlock',
  factory() {
    return new CodeBlockMenu()
  },
}
