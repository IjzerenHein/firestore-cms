import React, { Component } from "react";
import PropTypes from "prop-types";
import { Pane, Table } from "evergreen-ui";
import { observer } from "../../app";
import CollectionTableHeader from "./CollectionTableHeader";
import CollectionTableRow from "./CollectionTableRow";
import CollectionTableRowPlaceholder from "./CollectionTableRowPlaceholder";

class CollectionTable extends Component {
  static propTypes = {
    collection: PropTypes.any
  };

  render() {
    const { collection } = this.props;
    const { content } = collection;
    return (
      <Pane flex={1} display="flex" flexDirection="column">
        <Table flex={1} display="flex" flexDirection="column">
          <CollectionTableHeader collection={collection} />
          <Table.Body flex={1} position="relative">
            <CollectionTableRowPlaceholder
              collection={collection}
              rowCount={content.isLoading && !content.docs.length ? 10 : 0}
            />
            {content.docs.map(doc => (
              <CollectionTableRow
                key={doc.id}
                document={doc}
                collection={collection}
              />
            ))}
          </Table.Body>
        </Table>
      </Pane>
    );
  }
}

export default observer(CollectionTable);
