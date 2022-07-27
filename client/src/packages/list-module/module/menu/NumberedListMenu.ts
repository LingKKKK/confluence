/**
 * @description numbered list menu
 */

import { IDomEditor, t } from '@packages/core/index'
import BaseMenu from './BaseMenu'
import { NUMBERED_LIST_SVG } from '../../constants/svg'

class NumberedListMenu extends BaseMenu {
  readonly type = 'numbered-list'
  readonly title = t('listModule.orderedList')
  readonly iconSvg = NUMBERED_LIST_SVG
}

export default NumberedListMenu
