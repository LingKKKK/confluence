/**
 * @description parse html
 */

import { Descendant } from 'slate'
import $, { DOMElement } from '../../utils/dom'
import { IDomEditor, DomEditor } from '@packages/core/index'
import { PreElement, CodeElement } from './custom-types'

function parseCodeHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): CodeElement {
  const $elem = $(elem)

  return {
    type: 'code',
    language: '', // language 在 code-highlight 中实现
    children: [{ text: $elem[0].textContent || '' }],
  }
}

export const parseCodeHtmlConf = {
  selector: 'pre>code', // 匹配 <pre> 下的 <code>
  parseElemHtml: parseCodeHtml,
}

function parsePreHtml(elem: DOMElement, children: Descendant[], editor: IDomEditor): PreElement {
  const $elem = $(elem)

  children = children.filter(child => DomEditor.getNodeType(child) === 'code')
  if (children.length === 0) {
    children = [{ type: 'code', language: '', children: [{ text: $elem[0].textContent || '' }] }]
  }

  return {
    type: 'pre',
    // @ts-ignore
    children: children.filter(child => DomEditor.getNodeType(child) === 'code'),
  }
}

export const parsePreHtmlConf = {
  selector: 'pre',
  parseElemHtml: parsePreHtml,
}
