/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { DashboardStore as _DashboardStore } from './store';

export as namespace IDashboardStore;

export interface DashboardStore extends _DashboardStore {}

namespace JSX {
  interface IntrinsicElements {
      div: React.HTMLProps<HTMLDivElement>
      "ne-p": React.HTMLProps<HTMLDivElement>
  }
}
