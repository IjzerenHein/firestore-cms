import CollectionConfig from "./CollectionConfig";
import defaultConfig from "./defaultConfig";
import merge from "lodash.merge";

class Config {
  constructor(config) {
    const { firebase, title, isPersistent, types, collections } = merge(
      {},
      defaultConfig,
      config
    );
    this._firebase = firebase;
    this._isPersistent = isPersistent;
    this._title = title;
    this._types = types;
    this._collections = Object.keys(collections).map(
      collectionId =>
        new CollectionConfig(collectionId, collections[collectionId], this)
    );
  }

  get firebase() {
    return this._firebase;
  }

  get isPersistent() {
    return this._isPersistent;
  }

  get title() {
    return this._title;
  }

  get types() {
    return this._types;
  }

  /**
   * Collection of CollectionConfig objects that describe
   * the collections that are shown in the sidebar.
   */
  get collections() {
    return this._collections;
  }
}

export default Config;
