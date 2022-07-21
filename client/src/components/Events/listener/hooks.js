import KeyboardListener from "jj-keyboard";
import Enter from '../keydown/Enter';

export const useKeyboardKey = (editorStore) => {
  KeyboardListener.delAllCatch();
  KeyboardListener.destroy();
  KeyboardListener.init();
  KeyboardListener.isConsole = true;

  KeyboardListener.catch("Enter", (e) => {
    Enter(editorStore, e);
    return false;
  });
  // KeyboardListener.catch("Meta+V", (e) => {
  //   console.log('Meta+V');
  //   e.preventDefault();
  //   return false;
  // });
  // KeyboardListener.catch("V+Meta", (e) => {
  //   e.preventDefault();
  // });
  // KeyboardListener.catch("Backspace", (e) => {
  //   console.log(e);
  // });
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
