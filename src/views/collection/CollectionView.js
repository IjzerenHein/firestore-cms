import React, { Component } from "react";
import CollectionTable from "./CollectionTable";
import { StorePropType, storeObserver } from "../../app";

class CollectionView extends Component {
  static propTypes = {
    store: StorePropType
  };

  render() {
    const { store } = this.props;
    return <CollectionTable collection={store.selectedCollection} />;
  }
}

export default storeObserver(CollectionView);
