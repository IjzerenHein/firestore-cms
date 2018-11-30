import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Pane } from "evergreen-ui";

class CollectionTableRowPlaceholder extends Component {
  static propTypes = {
    collection: PropTypes.any.isRequired,
    rowCount: PropTypes.number.isRequired
  };

  static defaultProps = {
    rowCount: 10
  };

  render() {
    const { collection, rowCount } = this.props;
    const { config } = collection;
    const rows = [];
    for (let i = 0; i < rowCount; i++) {
      rows.push(
        <Table.Row key={`placeholder${i}`}>
          {config.columns.map(column => (
            <Table.Cell key={column.id}>
              <Pane background="tint2" width="100%" height={20} />
            </Table.Cell>
          ))}
          <Table.Cell width={48} flex="none">
            <Pane background="tint2" width="100%" height={20} />
          </Table.Cell>
        </Table.Row>
      );
    }

    return rows;
  }
}

export default CollectionTableRowPlaceholder;
