import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "evergreen-ui";
import { observer } from "../../app";

class CollectionTable extends Component {
  static propTypes = {
    collection: PropTypes.any
  };

  render() {
    const { collection } = this.props;
    const { config, content } = collection;
    return (
      <Table>
        <Table.Head>
          {config.columns.map(column => (
            <Table.TextHeaderCell key={column.id}>
              {column.name}
            </Table.TextHeaderCell>
          ))}
        </Table.Head>
        <Table.Body height={240}>
          {content.docs.map(doc => (
            <Table.Row
              key={doc.id}
              isSelectable
              onSelect={() => alert(doc.name)}
            >
              {config.columns.map(column => (
                <Table.TextCell key={column.id}>
                  {column.getValue(doc)}
                </Table.TextCell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}

export default observer(CollectionTable);
