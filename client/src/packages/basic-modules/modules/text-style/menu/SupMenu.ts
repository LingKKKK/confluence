/**
 * @description sup menu
 */

import { t } from '@packages/core/index'
import BaseMenu from './BaseMenu'
import { SUP_SVG } from '../../../constants/icon-svg'

class SupMenu extends BaseMenu {
  readonly mark = 'sup'
  readonly marksNeedToRemove = ['sub'] // sup 和 sub 不能共存
  readonly title = t('textStyle.sup')
  readonly iconSvg = SUP_SVG
  readonly hotkey = ''
}

export default SupMenu
