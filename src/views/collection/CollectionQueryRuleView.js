import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { observer } from "../../app";
import {
  Pane,
  Select,
  IconButton,
  Autocomplete,
  TextInput,
  Text
} from "evergreen-ui";

class CollectionQueryRuleView extends Component {
  static propTypes = {
    rule: PropTypes.any.isRequired
  };

  render() {
    const { rule } = this.props;
    return (
      <Pane
        marginY={12}
        marginLeft={16}
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
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
          <Autocomplete
            title="Filter"
            onChange={this.onChangeFilter}
            items={this.getFilterAutoCompleteItems()}
          >
            {props => {
              const { getInputProps, getRef, inputValue, openMenu } = props;
              return (
                <TextInput
                  placeholder="Filter"
                  value={inputValue}
                  innerRef={getRef}
                  {...getInputProps({
                    onFocus: () => {
                      openMenu();
                    }
                  })}
                />
              );
            }}
          </Autocomplete>
        </Pane>

        <IconButton appearance="minimal" icon="cross" />
      </Pane>
    );
  }

  onChangeSortOrder = event => {
    this.props.rule.sortOrder = event.target.value;
  };

  onChangeFilter = changedItem => {
    // TODO
    console.log(changedItem);
  };

  getFilterAutoCompleteItems() {
    // TODO
    return ["Apple", "Apricot", "Banana", "Cherry", "Cucumber"];
  }
}

export default observer(CollectionQueryRuleView);
