import React, { Component } from "react";
import CollectionTable from "./CollectionTable";
import CollectionQueryRulesView from "./CollectionQueryRulesView";
import CollectionTableFooter from "./CollectionTableFooter";
import { StorePropType, storeObserver } from "../../app";
import { Pane } from "evergreen-ui";

class CollectionView extends Component {
  static propTypes = {
    store: StorePropType
  };

  render() {
    const { store } = this.props;
    return (
      <Pane padding={20} display="flex" flexDirection="column" flex={1}>
        {/*<CollectionQueryRulesView collection={store.selectedCollection} />*/}
        <CollectionTable collection={store.selectedCollection} />
        <CollectionTableFooter collection={store.selectedCollection} />
      </Pane>
    );
  }
}

export default storeObserver(CollectionView);
