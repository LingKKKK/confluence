/**
 * @description parse html
 */

import { Descendant, Text } from 'slate'
import { IDomEditor } from '@packages/core/index'
import { ParagraphElement } from './custom-types'
import $, { DOMElement } from '../../utils/dom'

function parseParagraphHtml(
  elem: DOMElement,
  children: Descendant[],
  editor: IDomEditor
): ParagraphElement {
  const $elem = $(elem)

  children = children.filter(child => {
    if (Text.isText(child)) return true
    if (editor.isInline(child)) return true
    return false
  })

  // 无 children ，则用纯文本
  if (children.length === 0) {
    children = [{ text: $elem.text().replace(/\s+/gm, ' ') }]
  }

  return {
    type: 'paragraph',
    // @ts-ignore
    children,
  }
}

export const parseParagraphHtmlConf = {
  selector: 'p',
  parseElemHtml: parseParagraphHtml,
}
