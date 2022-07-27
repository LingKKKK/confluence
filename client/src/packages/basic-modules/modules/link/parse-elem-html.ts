/**
 * @description parse html
 */

import { Descendant, Text } from 'slate'
import { IDomEditor } from '@packages/core/index'
import { LinkElement } from './custom-types'
import $, { DOMElement } from '../../utils/dom'

function parseHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): LinkElement {
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
    type: 'link',
    url: $elem.attr('href') || '',
    target: $elem.attr('target') || '',
    // @ts-ignore
    children,
  }
}

export const parseHtmlConf = {
  selector: 'a',
  parseElemHtml: parseHtml,
}
