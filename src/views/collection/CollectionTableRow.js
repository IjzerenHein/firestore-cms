import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Popover, Position, IconButton, Menu } from "evergreen-ui";
import { observer, DocumentFieldValue } from "../../app";

class CollectionTableRow extends Component {
  static propTypes = {
    collection: PropTypes.any.isRequired,
    document: PropTypes.any.isRequired
  };

  render() {
    const { document, collection } = this.props;
    const { config } = collection;
    return (
      <Table.Row>
        {config.columns.map(column => (
          <Table.TextCell key={column.id}>
            <DocumentFieldValue document={document} field={column} />
          </Table.TextCell>
        ))}
        <Table.Cell width={48} flex="none">
          <Popover
            content={this.renderRowMenu}
            position={Position.BOTTOM_RIGHT}
          >
            <IconButton icon="more" height={24} appearance="minimal" />
          </Popover>
        </Table.Cell>
      </Table.Row>
    );
  }

  renderRowMenu = () => {
    return (
      <Menu>
        <Menu.Group>
          <Menu.Item
            intent="danger"
            onSelect={() => {
              this.props.document.delete();
            }}
          >
            Delete...
          </Menu.Item>
        </Menu.Group>
      </Menu>
    );
  };
}

export default observer(CollectionTableRow);
