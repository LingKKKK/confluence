/**
 * @description paragraph entry
 */

import { IModuleConf } from '@packages/core/index'
import { renderParagraphConf } from './render-elem'
import { pToHtmlConf } from './elem-to-html'
import { parseParagraphHtmlConf } from './parse-elem-html'
import withParagraph from './plugin'

const p: Partial<IModuleConf> = {
  renderElems: [renderParagraphConf],
  elemsToHtml: [pToHtmlConf],
  parseElemsHtml: [parseParagraphHtmlConf],
  editorPlugin: withParagraph,
}

export default p
