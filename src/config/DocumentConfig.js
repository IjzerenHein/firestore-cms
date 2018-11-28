import DocumentFieldConfig from "./DocumentFieldConfig";

class DocumentConfig {
  constructor({ fields }) {
    fields = {
      ...fields,
      id: {
        type: "string",
        name: "Id",
        description: "Unique Id",
        ...(fields.id || {})
      },
      path: {
        type: "string",
        name: "Path",
        description: "Collection path",
        ...(fields.id || {})
      }
    };
    this._fields = Object.keys(fields).map(
      fieldId => new DocumentFieldConfig(fieldId, fields[fieldId])
    );
  }

  get fields() {
    return this._fields;
  }

  getField(fieldId) {
    return this._fields.find(({ id }) => id === fieldId);
  }

  // get validate() {}
}

export default DocumentConfig;
