/* eslint-disable no-unused-vars */

// 在这个文件中,定义editor相关的所有全局类型

interface Event {
  altKey?: boolean;
  charCode?: number;
  ctrlKey?: boolean;
  getModifierState(key: string): boolean;
  key?: string;
  keyCode?: number;
  locale?: string;
  location?: number;
  metaKey?: boolean;
  repeat?: boolean;
  shiftKey?: boolean;
  which?: number;
  // Menu ↓
  // Alt：Alt 键
  // CapsLock：大写锁定键
  // Control：Ctrl 键
  // Meta：Meta 键
  // NumLock：数字键盘开关键
  // Shift：Shift 键
}

interface Window {
  event?: Event | undefined | null;
}
