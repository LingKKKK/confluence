/**
 * @description editor 插件，重写 editor API
 */

// import { Editor, Path, Operation } from 'slate'
import { IDomEditor } from '@packages/core/index'

function withImage<T extends IDomEditor>(editor: T): T {
  const { isInline, isVoid, insertNode } = editor
  const newEditor = editor

  // 重写 isInline
  newEditor.isInline = elem => {
    const { type } = elem

    if (type === 'image') {
      return true
    }

    return isInline(elem)
  }

  // 重写 isVoid
  newEditor.isVoid = elem => {
    const { type } = elem

    if (type === 'image') {
      return true
    }

    return isVoid(elem)
  }

  // 返回 editor ，重要！
  return newEditor
}

export default withImage
