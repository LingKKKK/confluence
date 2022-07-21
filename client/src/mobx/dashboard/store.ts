import { observable, action, runInAction, makeObservable } from "mobx";
import * as api from "@servers/dashboard";
import BasicStore, { initLoading } from "../basicStore";

export class DashboardStore extends BasicStore {
  @observable list: any = [];
  @observable count: number = 0;

  constructor() {
    super();
    makeObservable(this);
  }

  // @initLoading
  @action
  async getTable() {
    const res: any = await api.getTable();
    runInAction(() => {
      this.list = res.result;
    });
  }

  @action
  async increment() {
    this.count -= 1;
    this.list = [];
  }

  @action
  async decrement() {
    this.count += 1;
  }
}

export default new DashboardStore();
