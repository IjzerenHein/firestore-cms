import React, { Component } from "react";
import CollectionTable from "./CollectionTable";
import CollectionHeaderView from "./CollectionHeaderView";
import CollectionFooterView from "./CollectionFooterView";
import { StorePropType, storeObserver } from "../../app";
import { Pane, Card } from "evergreen-ui";

class CollectionView extends Component {
  static propTypes = {
    store: StorePropType
  };

  render() {
    const { store } = this.props;
    return (
      <Pane display="flex" flexDirection="column" flex={1}>
        <Card
          margin={16}
          marginBottom={8}
          display="flex"
          flexDirection="column"
          flex={1}
          elevation={1}
        >
          <CollectionHeaderView collection={store.selectedCollection} />
          <CollectionTable collection={store.selectedCollection} />
        </Card>
        <CollectionFooterView collection={store.selectedCollection} />
      </Pane>
    );
  }
}

export default storeObserver(CollectionView);
