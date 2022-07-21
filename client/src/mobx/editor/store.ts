import { observable, action, runInAction, makeObservable } from "mobx";
import * as api from "@servers/editor";
import BasicStore from "../basicStore";

export class EditorStore extends BasicStore {
  @observable list: any = [];
  @observable count: number = 5;

  constructor() {
    super();
    makeObservable(this);
  }

  @action async getFileData() {
    const res: any = await api.getFileData();
    runInAction(() => {
      this.list = res.result;
    });
  }

  @action increment = () => {
    this.count += 1;
  };

  @action decrement = () => {
    this.count -= 1;
  };

  @action aaaaa() {
    this.list = [1,2,3];
  }
}

export default new EditorStore();
