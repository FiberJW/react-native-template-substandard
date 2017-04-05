import { observable, action } from 'mobx';

class UIStore {
  @observable count = 10;
  @action decrementCount = () => --this.count;
  @action setCount = n => this.count = n;
}

export default new UIStore();
