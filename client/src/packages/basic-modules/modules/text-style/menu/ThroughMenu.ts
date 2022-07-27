/**
 * @description through menu
 */

import { t } from '@packages/core/index'
import BaseMenu from './BaseMenu'
import { THROUGH_SVG } from '../../../constants/icon-svg'

class ThroughMenu extends BaseMenu {
  readonly mark = 'through'
  readonly title = t('textStyle.through')
  readonly iconSvg = THROUGH_SVG
  readonly hotkey = 'mod+shift+x'
}

export default ThroughMenu
