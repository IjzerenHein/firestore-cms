import DocumentConfig from "./DocumentConfig";
import CollectionColumnConfig from "./CollectionColumnConfig";

class CollectionConfig {
  constructor(id, { path, name, icon, document, columns }) {
    this._id = id;
    this._path = path;
    this._name = name;
    this._icon = icon;
    this._document = new DocumentConfig(document);
    console.log(columns);
    this._columns = Object.keys(columns).map(
      columnId =>
        new CollectionColumnConfig(columnId, {
          config: columns[columnId],
          document: this._document
        })
    );
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
