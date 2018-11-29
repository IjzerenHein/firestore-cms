import { Collection } from "firestorter";
import { observable, runInAction } from "mobx";
import CollectionQuery from "./CollectionQuery";

class SelectedCollection {
  constructor() {
    this._config = observable.box(undefined);
    this._query = observable.box(undefined);
    this._content = new Collection(
      () => (this.config ? this.config.path : undefined),
      {
        query: ref => (ref && this.query ? this.query.eval(ref) : ref)
      }
    );
  }

  set config(val) {
    runInAction(() => {
      if (this.config !== val) {
        this._config.set(val);
        this._query.set(val ? new CollectionQuery(val) : undefined);
      }
    });
  }

  get config() {
    return this._config.get();
  }

  get query() {
    return this._query.get();
  }

  get content() {
    return this._content;
  }
}

export default SelectedCollection;
