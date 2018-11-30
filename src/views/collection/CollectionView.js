import React, { Component } from "react";
import CollectionTable from "./CollectionTable";
import CollectionHeaderView from "./CollectionHeaderView";
import CollectionTableFooter from "./CollectionTableFooter";
import { StorePropType, storeObserver } from "../../app";
import { Card } from "evergreen-ui";

class CollectionView extends Component {
  static propTypes = {
    store: StorePropType
  };

  render() {
    const { store } = this.props;
    return (
      <Card
        margin={16}
        display="flex"
        flexDirection="column"
        flex={1}
        elevation={1}
      >
        <CollectionHeaderView collection={store.selectedCollection} />
        <CollectionTable collection={store.selectedCollection} />
        <CollectionTableFooter collection={store.selectedCollection} />
      </Card>
    );
  }
}

export default storeObserver(CollectionView);
