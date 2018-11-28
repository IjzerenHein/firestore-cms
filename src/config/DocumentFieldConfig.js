class DocumentFieldConfig {
  constructor(id, { type, name, icon, description }) {
    this._id = id;
    this._type = type;
    this._name = name;
    this._icon = icon;
    this._description = description;
  }

  get id() {
    return this._id;
  }

  get type() {
    return this._type;
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
}

export default DocumentFieldConfig;
