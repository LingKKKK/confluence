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
  KeyboardListener.catch("Shift+Enter", (e) => {
    e.preventDefault();
  });
  KeyboardListener.catch("Enter+Shift", (e) => {
    e.preventDefault();
  });
}

export const removeKeyboardKey = () => {
  KeyboardListener.delAllCatch();
  KeyboardListener.destroy();
};
