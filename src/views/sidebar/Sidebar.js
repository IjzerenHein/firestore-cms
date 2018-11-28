import React, { Component } from "react";
import SidebarItem from "./SidebarItem";
import { Pane } from "evergreen-ui";
import { Link } from "react-router-dom";
import { storeObserver, StorePropType } from "../../app";

class Sidebar extends Component {
  static propTypes = {
    store: StorePropType
  };

  render() {
    const { store } = this.props;
    const { config } = store;
    return (
      <Pane
        width={240}
        background="tint2"
        display="flex"
        flexDirection="column"
      >
        {config.collections.map(collection => (
          <Link to={`/col/${collection.id}`} key={collection.id}>
            <SidebarItem
              text={collection.name}
              icon={collection.icon}
              isSelected={store.selectedCollection.config === collection}
            />
          </Link>
        ))}
      </Pane>
    );
  }
}

export default storeObserver(Sidebar);
