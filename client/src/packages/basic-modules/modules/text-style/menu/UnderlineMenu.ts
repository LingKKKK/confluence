/**
 * @description underline menu
 */

import { t } from '@packages/core/index'
import BaseMenu from './BaseMenu'
import { UNDER_LINE_SVG } from '../../../constants/icon-svg'

class UnderlineMenu extends BaseMenu {
  readonly mark = 'underline'
  readonly title = t('textStyle.underline')
  readonly iconSvg = UNDER_LINE_SVG
  readonly hotkey = 'mod+u'
}

export default UnderlineMenu
