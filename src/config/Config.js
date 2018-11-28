import CollectionConfig from "./CollectionConfig";

class Config {
  constructor({ firebase, isPersistent, collections }) {
    this._firebase = firebase;
    this._isPersistent = isPersistent;

    this._collections = Object.keys(collections).map(
      collectionId =>
        new CollectionConfig(collectionId, collections[collectionId])
    );
  }

  get firebase() {
    return this._firebase;
  }

  get isPersistent() {
    return this._isPersistent;
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
