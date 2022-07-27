/**
 * @description justify center menu
 */

import { Transforms, Element } from 'slate'
import { IDomEditor, t } from '@packages/core/index'
import BaseMenu from './BaseMenu'
import { JUSTIFY_CENTER_SVG } from '../../../constants/icon-svg'

class JustifyCenterMenu extends BaseMenu {
  readonly title = t('justify.center')
  readonly iconSvg = JUSTIFY_CENTER_SVG

  exec(editor: IDomEditor, value: string | boolean): void {
    Transforms.setNodes(
      editor,
      {
        textAlign: 'center',
      },
      { match: n => Element.isElement(n) && !editor.isInline(n) } // inline 元素设置text-align 是没作用的
    )
  }
}

export default JustifyCenterMenu
