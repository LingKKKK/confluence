/**
 * @description 全屏
 */

import { IModuleConf } from '@packages/core/index'
import { fullScreenConf } from './menu/index'

const fullScreen: Partial<IModuleConf> = {
  menus: [fullScreenConf],
}

export default fullScreen
