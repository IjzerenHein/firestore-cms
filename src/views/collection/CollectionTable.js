import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Pane, Spinner, Table } from "evergreen-ui";
import { observer } from "../../app";
import CollectionTableRow from "./CollectionTableRow";

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
          <Table.Body flex={1} position="relative">
            {content.docs.map(doc => (
              <CollectionTableRow
                key={doc.id}
                document={doc}
                collection={collection}
              />
            ))}
            {content.isLoading && !content.docs.length
              ? new Array(10)
                  .fill(0)
                  .map((val, index) => (
                    <CollectionTableRow
                      key={index}
                      collection={collection}
                      isPlaceholder
                    />
                  ))
              : undefined}
          </Table.Body>
        </Table>
      </Card>
    );
  }
}

export default observer(CollectionTable);
