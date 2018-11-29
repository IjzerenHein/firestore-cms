import React, { Component } from "react";
import SidebarItem from "./SidebarItem";
import SidebarHeader from "./SidebarHeader";
import { Pane, Heading } from "evergreen-ui";
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
        background="tint1"
        elevation={2}
        display="flex"
        flexDirection="column"
      >
        <SidebarHeader />
        <Heading size={100} paddingLeft={20} marginY={8}>
          Collections
        </Heading>
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
