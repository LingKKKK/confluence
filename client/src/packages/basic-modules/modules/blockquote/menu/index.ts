/**
 * @description block quote menu
 */

import BlockquoteMenu from './BlockquoteMenu'

export const blockquoteMenuConf = {
  key: 'blockquote',
  factory() {
    return new BlockquoteMenu()
  },
}
