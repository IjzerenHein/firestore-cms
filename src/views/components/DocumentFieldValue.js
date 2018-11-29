import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer } from "../../app";
import { Text, TextInput, Checkbox, Switch } from "evergreen-ui";

class DocumentFieldValue extends Component {
  static propTypes = {
    document: PropTypes.any.isRequired,
    field: PropTypes.any.isRequired,
    isEditable: PropTypes.bool
  };

  static defaultProps = {
    isEditable: false
  };

  render() {
    const { field, document, isEditable } = this.props;

    const value = field.getValue(document);

    let content;
    switch (field.control) {
      case "textinput":
        content = isEditable ? (
          <TextInput
            placeholder={field.name}
            value={value}
            onChange={this.onTextInputChange}
          />
        ) : (
          <Text>{value}</Text>
        );
        break;
      case "checkbox":
        content = (
          <Checkbox
            disabled={!isEditable}
            checked={value ? true : false}
            onChange={this.onCheckboxSwitchChange}
          />
        );
        break;
      case "switch":
        content = (
          <Switch
            disabled={!isEditable}
            checked={value ? true : false}
            onChange={this.onCheckboxSwitchChange}
          />
        );
        break;
      default:
        content = <Text>{value}</Text>;
        break;
    }

    return content;
  }

  onTextInputChange = event => {
    // TODO
  };

  onCheckboxSwitchChange = event => {
    const { document, field } = this.props;
    const change = {};
    change[field.id] = event.target.checked ? true : false;
    document.update(change);
  };
}

export default observer(DocumentFieldValue);
