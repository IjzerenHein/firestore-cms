import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { observer, DebouncedInput } from "../../app";
import { Pane, Select, IconButton, TextInput, Text } from "evergreen-ui";

class CollectionQueryRuleView extends Component {
  static propTypes = {
    collection: PropTypes.any.isRequired,
    rule: PropTypes.any.isRequired
  };

  render() {
    const { rule } = this.props;
    return (
      <Pane marginY={8} display="flex" flexDirection="row" alignItems="center">
        <Pane flex="1">
          <Text size={500} color="selected">
            {rule.field.name}
          </Text>
        </Pane>

        <Pane flex="1">
          <Select value={rule.sortOrder} onChange={this.onChangeSortOrder}>
            <option value="asc" checked>
              Ascending
            </option>
            <option value="desc">Descending</option>
          </Select>
        </Pane>

        <Pane>
          <DebouncedInput value={rule.filter} onChange={this.onChangeFilter}>
            {({ value, onChange }) => (
              <TextInput
                placeholder="Filter"
                value={value}
                onChange={onChange}
              />
            )}
          </DebouncedInput>
        </Pane>

        <IconButton appearance="minimal" icon="trash" onClick={this.onDelete} />
      </Pane>
    );
  }

  onChangeSortOrder = event => {
    this.props.rule.sortOrder = event.target.value;
  };

  onChangeFilter = event => {
    this.props.rule.filter = event.target.value;
  };

  /* getFilterAutoCompleteItems() {
    // TODO
    return ["Apple", "Apricot", "Banana", "Cherry", "Cucumber"];
  }*/

  onDelete = () => {
    const { collection, rule } = this.props;
    collection.query.deleteRule(rule);
  };
}

export default observer(CollectionQueryRuleView);
