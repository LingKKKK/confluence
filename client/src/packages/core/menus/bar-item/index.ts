/**
 * @description bar item
 */

import { Dom7Array } from '../../utils/dom'
import { IButtonMenu, ISelectMenu, IDropPanelMenu, IModalMenu, IMenuGroup } from '../interface'
import { IDomEditor } from '../../editor/interface'
import { BAR_ITEM_TO_EDITOR } from '../../utils/weak-maps'
import SimpleButton from './SimpleButton'
import DropPanelButton from './DropPanelButton'
import ModalButton from './ModalButton'
import Select from './Select'
import GroupButton from './GroupButton'

type MenuType = IButtonMenu | ISelectMenu | IDropPanelMenu | IModalMenu

export interface IBarItem {
  $elem: Dom7Array
  menu: MenuType
  changeMenuState: () => void
}

// menu -> barItem
const MENU_TO_BAR_ITEM = new WeakMap<MenuType, IBarItem>()

export function getEditorInstance(item: IBarItem): IDomEditor {
  const editor = BAR_ITEM_TO_EDITOR.get(item)
  if (editor == null) throw new Error('Can not get editor instance')
  return editor
}

/**
 * 创建 bar button/select
 * @param menu menu
 * @param inGroup 在 groupButton 中
 */
export function createBarItem(menu: MenuType, inGroup: boolean = false): IBarItem {
  // 尝试从缓存获取
  let barItem = MENU_TO_BAR_ITEM.get(menu)
  if (barItem) return barItem

  // 缓存没有则创建
  const { tag } = menu
  if (tag === 'button') {
    // @ts-ignore
    const { showDropPanel, showModal } = menu
    if (showDropPanel) {
      barItem = new DropPanelButton(menu as IDropPanelMenu, inGroup)
    } else if (showModal) {
      barItem = new ModalButton(menu as IModalMenu, inGroup)
    } else {
      barItem = new SimpleButton(menu, inGroup)
    }
  }
  if (tag === 'select') {
    barItem = new Select(menu as ISelectMenu, inGroup)
  }

  if (barItem == null) throw new Error(`Invalid tag in menu ${JSON.stringify(menu)}`)

  // 记录缓存
  MENU_TO_BAR_ITEM.set(menu, barItem)

  return barItem
}

export function createBarItemGroup(menu: IMenuGroup): GroupButton {
  return new GroupButton(menu)
}
