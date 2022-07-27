/**
 * @description indent entry
 */

import { IModuleConf } from '@packages/core/index'
import { renderStyle } from './render-style'
import { styleToHtml } from './style-to-html'
import { preParseHtmlConf } from './pre-parse-html'
import { parseStyleHtml } from './parse-style-html'
import { indentMenuConf, delIndentMenuConf } from './menu/index'

const indent: Partial<IModuleConf> = {
  renderStyle,
  styleToHtml,
  preParseHtml: [preParseHtmlConf],
  parseStyleHtml,
  menus: [indentMenuConf, delIndentMenuConf],
}

export default indent
