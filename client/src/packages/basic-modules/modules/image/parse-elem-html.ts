/**
 * @description parse html
 */

import { Descendant } from 'slate'
import { IDomEditor } from '@packages/core/index'
import { ImageElement } from './custom-types'
import $, { DOMElement, getStyleValue } from '../../utils/dom'

function parseHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): ImageElement {
  const $elem = $(elem)
  let href = $elem.attr('data-href') || ''
  href = decodeURIComponent(href) // 兼容 V4

  return {
    type: 'image',
    src: $elem.attr('src') || '',
    alt: $elem.attr('alt') || '',
    href,
    style: {
      width: getStyleValue($elem, 'width'),
      height: getStyleValue($elem, 'height'),
    },
    children: [{ text: '' }], // void node 有一个空白 text
  }
}

export const parseHtmlConf = {
  selector: 'img',
  parseElemHtml: parseHtml,
}
