/**
 * @description render paragraph elem
 */

import { Element as SlateElement } from 'slate'
import { jsx, VNode } from 'snabbdom'
import { IDomEditor } from '@packages/core/index'

/**
 * render paragraph elem
 * @param elemNode slate elem
 * @param children children
 * @param editor editor
 * @returns vnode
 */
function renderParagraph(
  elemNode: SlateElement,
  children: VNode[] | null,
  editor: IDomEditor
): VNode {
  const vnode = <p>{children}</p>
  return vnode
}

export const renderParagraphConf = {
  type: 'paragraph',
  renderElem: renderParagraph,
}
