/**
 * @description emotion entry
 */

import { IModuleConf } from '@packages/core/index'
import { emotionMenuConf } from './menu/index'

const emotion: Partial<IModuleConf> = {
  menus: [emotionMenuConf],
}

export default emotion
