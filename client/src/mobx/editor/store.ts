import { observable, action, runInAction, makeObservable } from "mobx";
import * as api from "@servers/editor";
import BasicStore from "../basicStore";

export class EditorStore extends BasicStore {
  constructor(){
    super();
    makeObservable(this)
  }
  @observable list: any = [];
  @observable count: number = 5;

  @action
  async getFileData() {
    const res: any = await api.getFileData();
    runInAction(() => {
      this.list = res.result;
    });
  }

  @action
  increment = () => {
    this.count += 1;
  }

  @action
  decrement = () => {
    this.count -= 1;
  }
}

export default new EditorStore();
