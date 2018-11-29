class DocumentFieldConfig {
  constructor(
    id,
    { name, icon, description, type = "string", control, min, max },
    { types }
  ) {
    this._id = id;
    this._name = name;
    this._icon = icon;
    this._description = description;
    this._type = type;
    this._dataType = types[type].dataType;
    this._control = control || types[type].control;
    this._min = min || types[type].min;
    this._max = max || types[type].max;
  }

  get id() {
    return this._id;
  }

  get type() {
    return this._type;
  }

  get dataType() {
    return this._dataType;
  }

  get control() {
    return this._control;
  }

  get max() {
    return this._max;
  }

  get min() {
    return this._min;
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

export default DocumentFieldConfig;
