import React, { Component } from "react";
import PropTypes from "prop-types";
import { action } from "mobx";
import {
  Table,
  Popover,
  Position,
  Menu,
  TextDropdownButton
} from "evergreen-ui";
import { observer } from "../../app";

class CollectionTableHeader extends Component {
  static propTypes = {
    collection: PropTypes.any
  };

  render() {
    const { collection } = this.props;
    const { config } = collection;
    return (
      <Table.Head>
        {config.columns.map(column => this.renderHeaderCell(column))}
        <Table.HeaderCell width={48} flex="none" />
      </Table.Head>
    );
  }

  renderHeaderCell(column) {
    const { collection } = this.props;
    const { query } = collection;
    const rule = query.rules.find(rule => rule.field === column);
    return (
      <Table.TextHeaderCell key={column.id}>
        <Popover
          position={Position.BOTTOM_LEFT}
          content={props => this.renderHeaderCellMenu(column, props)}
        >
          <TextDropdownButton
            icon={
              rule
                ? rule.sortOrder === "asc"
                  ? "arrow-down"
                  : "arrow-up"
                : "caret-down"
            }
          >
            {column.name}
          </TextDropdownButton>
        </Popover>
      </Table.TextHeaderCell>
    );
  }

  renderHeaderCellMenu(column, { close }) {
    const rule = this.props.collection.query.rules.find(
      rule => rule.field === column
    );
    return (
      <Menu>
        <Menu.OptionsGroup
          title="Order"
          options={[
            { label: "Ascending", value: "asc" },
            { label: "Descending", value: "desc" }
          ]}
          selected={rule ? rule.sortOrder : null}
          onChange={action(value => {
            const { collection } = this.props;
            const rule = collection.query.rules.length
              ? collection.query.rules[0]
              : collection.query.addRule(column);
            console.log("RULE: ", rule);
            rule.field = column;
            rule.sortOrder = value;

            // Close the popover when you select a value.
            close();
          })}
        />
      </Menu>
    );
  }
}

export default observer(CollectionTableHeader);
