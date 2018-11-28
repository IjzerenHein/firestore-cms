class CollectionColumnConfig {
  constructor(id, { config, document }) {
    this._id = id;
    this._name = config.name || document.getField(id).name;
    this._icon = config.icon || document.getField(id).icon;
    this._description = config.description || document.getField(id).description;
    this._width = config.width || document.getField(id).width;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get icon() {
    return this._icon;
  }

  get description() {
    return this._description;
  }

  get width() {
    return this._width;
  }

  getValue(document) {
    const { id } = this;
    switch (id) {
      case "id":
        return document.id;
      case "path":
        return document.path;
      default:
        return document.data[id];
    }
  }
}

export default CollectionColumnConfig;
