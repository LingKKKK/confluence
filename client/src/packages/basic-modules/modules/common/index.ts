/**
 * @description common module
 */
import { IModuleConf } from '@packages/core/index'
import { enterMenuConf } from './menu/index'

const commonModule: Partial<IModuleConf> = {
  menus: [enterMenuConf],
}

export default commonModule
