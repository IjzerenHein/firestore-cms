import React, { Component } from "react";
import { Pane, Heading } from "evergreen-ui";
import { storeObserver, StorePropType } from "../../app";

class SidebarHeader extends Component {
  static propTypes = {
    store: StorePropType
  };

  render() {
    const { store } = this.props;
    return (
      <Pane
        paddingY={16}
        paddingX={20}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Heading size={600}>{store.config.title}</Heading>
      </Pane>
    );
  }
}

export default storeObserver(SidebarHeader);
