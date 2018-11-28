import { Collection } from "firestorter";
import { observable } from "mobx";

class SelectedCollection {
  constructor() {
    this._config = observable.box(null);
    this._content = new Collection(() =>
      this.config ? this.config.path : undefined
    );
  }

  set config(val) {
    this._config.set(val);
  }

  get config() {
    return this._config.get();
  }

  get content() {
    return this._content;
  }
}

export default SelectedCollection;
