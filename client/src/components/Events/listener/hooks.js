import KeyboardListener from "jj-keyboard";
import Enter from '../keydown/Enter';

export const useKeyboardKey = () => {
  console.log("添加绑定");
  KeyboardListener.delAllCatch();
  KeyboardListener.destroy();
  KeyboardListener.init();
  KeyboardListener.isConsole = false;

  KeyboardListener.catch("Enter", (e) => {
    e.preventDefault();
    Enter();
    return false;
  });
  KeyboardListener.catch("Meta+V", (e) => {
    console.log('Meta+V');
    e.preventDefault();
    return false;
  });
  // 兼容性、按键Bug
  KeyboardListener.catch("V+Meta", (e) => {
    e.preventDefault();
  });
};

export const removeKeyboardKey = () => {
  KeyboardListener.delAllCatch();
  KeyboardListener.destroy();
  console.log('解除绑定');
};
