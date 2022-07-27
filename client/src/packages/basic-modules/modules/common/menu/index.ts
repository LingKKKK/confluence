/**
 * @description common menu config
 */

import EnterMenu from './EnterMenu'

export const enterMenuConf = {
  key: 'enter',
  factory() {
    return new EnterMenu()
  },
}
