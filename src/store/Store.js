import SelectedCollection from "./SelectedCollection";

class Store {
  constructor({ config }) {
    this._config = config;
    this._selectedCollection = new SelectedCollection();
  }

  get auth() {
    return this._auth;
  }

  get config() {
    return this._config;
  }

  get selectedCollection() {
    return this._selectedCollection;
  }
}

export default Store;
