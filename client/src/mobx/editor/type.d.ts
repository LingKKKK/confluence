/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { EditorStore as _EditorStore } from "./store";

export as namespace IEditorStore;

export interface EditorStore extends _EditorStore {}

namespace JSX {
  interface IntrinsicElements {
    div: React.HTMLProps<HTMLDivElement>;
  }
}
