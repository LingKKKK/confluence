/**
 * @description bg color menu
 */

import { t } from '@packages/core/index'
import BaseMenu from './BaseMenu'
import { BG_COLOR_SVG } from '../../../constants/icon-svg'

class BgColorMenu extends BaseMenu {
  readonly title = t('color.bgColor')
  readonly iconSvg = BG_COLOR_SVG
  readonly mark = 'bgColor'
}

export default BgColorMenu
