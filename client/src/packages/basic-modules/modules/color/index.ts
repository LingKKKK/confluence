/**
 * @description color bgColor
 */

import { IModuleConf } from '@packages/core/index'
import { renderStyle } from './render-style'
import { styleToHtml } from './style-to-html'
import { preParseHtmlConf } from './pre-parse-html'
import { parseStyleHtml } from './parse-style-html'
import { colorMenuConf, bgColorMenuConf } from './menu/index'

const color: Partial<IModuleConf> = {
  renderStyle,
  styleToHtml,
  preParseHtml: [preParseHtmlConf],
  parseStyleHtml,
  menus: [colorMenuConf, bgColorMenuConf],
}

export default color
