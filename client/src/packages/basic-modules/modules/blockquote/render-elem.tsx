/**
 * @description render elem
 */

import { Element as SlateElement } from 'slate'
import { jsx, VNode } from 'snabbdom'
import { IDomEditor } from '@packages/core/index'

interface IOptions {
  options: string[]
}

const CardArray: React.FC<IOptions> = ({ options }) => {
  return <>{options.map(opt => opt)}</>
}

/**
 * render block quote elem
 * @param elemNode slate elem
 * @param children children
 * @param editor editor
 * @returns vnode
 */
function renderBlockQuote(
  elemNode: SlateElement,
  children: VNode[] | null,
  editor: IDomEditor
): VNode {
  // TODO: 尝试修复vnode内容缺失
  // const vnode = <blockquote>{children}</blockquote>
  const vnode = <blockquote>{children}</blockquote>
  return vnode
}

export const renderBlockQuoteConf = {
  type: 'blockquote',
  renderElem: renderBlockQuote,
}
