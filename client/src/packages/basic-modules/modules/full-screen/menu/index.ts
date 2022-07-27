/**
 * @description menu entry
 */

import FullScreen from './FullScreen'

export const fullScreenConf = {
  key: 'fullScreen',
  factory() {
    return new FullScreen()
  },
}
