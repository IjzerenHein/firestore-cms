import DocumentConfig from "./DocumentConfig";

class CollectionConfig {
  constructor(id, { path, name, icon, document, columns }, context) {
    this._id = id;
    this._path = path;
    this._name = name;
    this._icon = icon;
    this._document = new DocumentConfig(document, context);
    this._columns = columns.map(columnId => this._document.fields[columnId]);
  }

  get id() {
    return this._id;
  }

  get path() {
    return this._path;
  }

  get name() {
    return this._name;
  }

  get icon() {
    return this._icon;
  }

  get document() {
    return this._document;
  }

  get columns() {
    return this._columns;
  }
}

export default CollectionConfig;
