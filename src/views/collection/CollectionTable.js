import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Table, Popover, Position, IconButton, Menu } from "evergreen-ui";
import { observer, DocumentFieldValue } from "../../app";

class CollectionTable extends Component {
  static propTypes = {
    collection: PropTypes.any
  };

  render() {
    const { collection } = this.props;
    const { config, content } = collection;
    return (
      <Card flex={1} display="flex" flexDirection="column" elevation={1}>
        <Table flex={1} display="flex" flexDirection="column">
          <Table.Head>
            {config.columns.map(column => (
              <Table.TextHeaderCell key={column.id}>
                {column.name}
              </Table.TextHeaderCell>
            ))}
            <Table.HeaderCell width={48} flex="none" />
          </Table.Head>
          <Table.Body flex={1}>
            {content.docs.map(doc => (
              <Table.Row
                key={doc.id}
                isSelectable
                // onSelect={() => alert(doc.name)}
              >
                {config.columns.map(column => (
                  <Table.TextCell key={column.id}>
                    <DocumentFieldValue document={doc} field={column} />
                  </Table.TextCell>
                ))}
                <Table.Cell width={48} flex="none">
                  <Popover
                    content={() => this.renderRowMenu(doc)}
                    position={Position.BOTTOM_RIGHT}
                  >
                    <IconButton icon="more" height={24} appearance="minimal" />
                  </Popover>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>
    );
  }

  renderRowMenu(document) {
    return (
      <Menu>
        <Menu.Item
          intent="danger"
          onSelect={() => {
            document.delete();
          }}
        >
          Delete...
        </Menu.Item>
      </Menu>
    );
  }

  onDelete;
}

export default observer(CollectionTable);
