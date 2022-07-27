/**
 * @description text style entry
 */

import { IModuleConf } from '@packages/core/index'
import { renderStyle } from './render-style'
import { styleToHtml } from './style-to-html'
import { parseStyleHtml } from './parse-style-html'
import {
  boldMenuConf,
  underlineMenuConf,
  italicMenuConf,
  throughMenuConf,
  codeMenuConf,
  subMenuConf,
  supMenuConf,
  clearStyleMenuConf,
} from './menu/index'

const textStyle: Partial<IModuleConf> = {
  renderStyle,
  menus: [
    boldMenuConf,
    underlineMenuConf,
    italicMenuConf,
    throughMenuConf,
    codeMenuConf,
    subMenuConf,
    supMenuConf,
    clearStyleMenuConf,
  ],
  styleToHtml,
  parseStyleHtml,
}

export default textStyle
