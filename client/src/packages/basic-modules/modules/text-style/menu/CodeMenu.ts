/**
 * @description code menu
 */

import { t } from '@packages/core/index'
import BaseMenu from './BaseMenu'
import { CODE_SVG } from '../../../constants/icon-svg'

class CodeMenu extends BaseMenu {
  readonly mark = 'code'
  readonly title = t('textStyle.code')
  readonly iconSvg = CODE_SVG
  readonly hotkey = 'mod+e'
}

export default CodeMenu
