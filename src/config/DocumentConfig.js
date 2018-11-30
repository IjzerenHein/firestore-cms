import DocumentFieldConfig from "./DocumentFieldConfig";

class DocumentConfig {
  constructor({ fields }, context) {
    fields = {
      ...fields,
      id: {
        type: "string",
        name: "Unique Id",
        description: "Unique Id",
        ...(fields.id || {})
      },
      path: {
        type: "string",
        name: "Path",
        description: "Document path",
        ...(fields.path || {})
      }
    };
    this._fields = {};
    Object.keys(fields).forEach(
      fieldId =>
        (this._fields[fieldId] = new DocumentFieldConfig(
          fieldId,
          fields[fieldId],
          context
        ))
    );
  }

  get fields() {
    return this._fields;
  }
}

export default DocumentConfig;
