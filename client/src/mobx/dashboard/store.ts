import { observable, action, runInAction, makeObservable } from "mobx";
import * as api from "@servers/dashboard";
import BasicStore, { initLoading } from "../basicStore";

export class DashboardStore extends BasicStore {
  constructor(){
    super();
    makeObservable(this)
  }

  @observable list: any = [];
  @observable count: number = 0;

  @initLoading
  @action
  async getTable() {
    const res: any = await api.getTable();
    runInAction(() => {
      this.list = res.result;
    });
  }

  @action
  async increment() {
    const res: any = 3;
    runInAction(() => {
      console.log(res);
      this.count = res;
    });
  }

  @action
  async decrement() {
    const res: any = 5;
    runInAction(() => {
      console.log(res);
      this.count = res;
    });
  }
}

export default new DashboardStore();
