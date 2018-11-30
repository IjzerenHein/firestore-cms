import React, { Component } from "react";
import { PropTypes } from "mobx-react";
import { observer } from "../../app";
import {
  Card,
  Pane,
  Heading,
  IconButton,
  Menu,
  Popover,
  Position,
  TextDropdownButton
} from "evergreen-ui";
import CollectionQueryRulesView from "./CollectionQueryRulesView";

class CollectionHeaderView extends Component {
  static propTypes = {
    collection: PropTypes.any
  };

  render() {
    const { collection } = this.props;
    const { query } = collection;
    return (
      <Card
        background="tint2"
        paddingLeft={12}
        paddingRight={12}
        paddingTop={12}
      >
        <Pane
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <TextDropdownButton
            icon={query.rulesVisible ? "chevron-down" : "chevron-up"}
            onClick={this.onToggleRulesVisible}
          >
            <Heading size={100}>Sort & filter</Heading>
          </TextDropdownButton>
          <Heading size={500}>{collection.config.name}</Heading>
          <Popover content={this.renderMenu} position={Position.BOTTOM_RIGHT}>
            <IconButton
              icon="more"
              height={24}
              appearance="minimal"
              marginLeft={60}
            />
          </Popover>
        </Pane>
        {query.rulesVisible ? (
          <CollectionQueryRulesView collection={collection} />
        ) : (
          undefined
        )}
      </Card>
    );
  }

  renderMenu = () => {
    return (
      <Menu>
        <Menu.Group>
          <Menu.Item
            intent="none"
            onSelect={() => {
              // TODO
            }}
          >
            Multi Edit
          </Menu.Item>
        </Menu.Group>
      </Menu>
    );
  };

  onToggleRulesVisible = () => {
    this.props.collection.query.rulesVisible = !this.props.collection.query
      .rulesVisible;
  };
}

export default observer(CollectionHeaderView);
