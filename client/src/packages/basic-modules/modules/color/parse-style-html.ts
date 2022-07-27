/**
 * @description parse style html
 */

import { Descendant, Text } from 'slate'
import { IDomEditor } from '@packages/core/index'
import { ColorText } from './custom-types'
import $, { DOMElement, getStyleValue } from '../../utils/dom'

export function parseStyleHtml(text: DOMElement, node: Descendant, editor: IDomEditor): Descendant {
  const $text = $(text)
  if (!Text.isText(node)) return node

  const textNode = node as ColorText

  const color = getStyleValue($text, 'color')
  if (color) {
    textNode.color = color
  }

  let bgColor = getStyleValue($text, 'background-color')
  if (!bgColor) bgColor = getStyleValue($text, 'background') // word 背景色
  if (bgColor) {
    textNode.bgColor = bgColor
  }

  return textNode
}
