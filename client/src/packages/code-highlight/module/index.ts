/**
 * @description code highlight module
 */

import { IModuleConf } from '@packages/core/index'
import { renderStyle } from './render-style'
import { parseCodeStyleHtml } from './parse-style-html'
import { selectLangMenuConf } from './menu/index'
import { codeToHtmlConf } from './elem-to-html'

const codeHighlightModule: Partial<IModuleConf> = {
  renderStyle,
  parseStyleHtml: parseCodeStyleHtml,
  menus: [selectLangMenuConf],
  elemsToHtml: [codeToHtmlConf],
}

export default codeHighlightModule
