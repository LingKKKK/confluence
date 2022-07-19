import KeyboardListener from "jj-keyboard";
import Enter from '../keydown/Enter';

export const useKeyboardKey = (editorStore) => {
  KeyboardListener.delAllCatch();
  KeyboardListener.destroy();
  KeyboardListener.init();
  KeyboardListener.isConsole = true;

  KeyboardListener.catch("Enter", (e) => {
    e.preventDefault();
    editorStore.decrement();
    Enter(editorStore);
    return false;
  });
  KeyboardListener.catch("Meta+V", (e) => {
    console.log('Meta+V');
    e.preventDefault();
    editorStore.increment();
    return false;
  });
  // 兼容性、按键Bug
  KeyboardListener.catch("V+Meta", (e) => {
    e.preventDefault();
  });

  KeyboardListener.catch("Backspace", (e) => {
    console.log(e);
    // Enter(editorStore);
  });
  // KeyboardListener.catch("Backspace+Meta", (e) => {
  //   e.preventDefault();
  //   return false;
  // });
  // KeyboardListener.catch("Meta+Backspace", (e) => {
  //   e.preventDefault();
  //   return false;
  // });
}

export const removeKeyboardKey = () => {
  KeyboardListener.delAllCatch();
  KeyboardListener.destroy();
};
