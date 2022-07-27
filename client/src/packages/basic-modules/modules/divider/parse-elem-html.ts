/**
 * @description parse html
 */

import { Descendant } from 'slate'
import $, { DOMElement } from '../../utils/dom'
import { IDomEditor } from '@packages/core/index'
import { DividerElement } from './custom-types'

function parseHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): DividerElement {
  return {
    type: 'divider',
    children: [{ text: '' }], // void node 有一个空白 text
  }
}

export const parseHtmlConf = {
  selector: 'hr',
  parseElemHtml: parseHtml,
}
