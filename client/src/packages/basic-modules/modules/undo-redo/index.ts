/**
 * @description undo redo
 */

import { IModuleConf } from '@packages/core/index'
import { redoMenuConf, undoMenuConf } from './menu/index'

const undoRedo: Partial<IModuleConf> = {
  menus: [redoMenuConf, undoMenuConf],
}

export default undoRedo
