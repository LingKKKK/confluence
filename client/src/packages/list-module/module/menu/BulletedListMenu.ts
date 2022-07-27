/**
 * @description bulleted list menu
 */

import { IDomEditor, t } from '@packages/core/index'
import BaseMenu from './BaseMenu'
import { BULLETED_LIST_SVG } from '../../constants/svg'

class BulletedListMenu extends BaseMenu {
  readonly type = 'bulleted-list'
  readonly title = t('listModule.unOrderedList')
  readonly iconSvg = BULLETED_LIST_SVG
}

export default BulletedListMenu
