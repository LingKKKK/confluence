/**
 * @description todo menu entry
 */

import TodoMenu from './Todo'

export const todoMenuConf = {
  key: 'todo',
  factory() {
    return new TodoMenu()
  },
}
