/**
 * @description redo menu
 */

import { IButtonMenu, IDomEditor, t } from '@packages/core/index'
import { REDO_SVG } from '../../../constants/icon-svg'

class RedoMenu implements IButtonMenu {
  title = t('undo.redo')
  iconSvg = REDO_SVG
  tag = 'button'

  getValue(editor: IDomEditor): string | boolean {
    return ''
  }

  isActive(editor: IDomEditor): boolean {
    return false
  }

  isDisabled(editor: IDomEditor): boolean {
    if (editor.selection == null) return true
    return false
  }

  exec(editor: IDomEditor, value: string | boolean) {
    if (typeof editor.redo === 'function') {
      editor.redo()
    }
  }
}

export default RedoMenu
