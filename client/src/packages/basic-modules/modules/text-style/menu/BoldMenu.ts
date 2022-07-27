/**
 * @description bold menu
 */

import { t } from '@packages/core/index'
import BaseMenu from './BaseMenu'
import { BOLD_SVG } from '../../../constants/icon-svg'

class BoldMenu extends BaseMenu {
  readonly mark = 'bold'
  readonly title = t('textStyle.bold')
  readonly iconSvg = BOLD_SVG
  readonly hotkey = 'mod+b'
}

export default BoldMenu
