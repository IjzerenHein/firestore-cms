import React, { Component } from "react";
import PropTypes from "prop-types";
import { Pane, Button, Popover, Position, Menu } from "evergreen-ui";
import { observer } from "../../app";

const limits = [20, 50, 200];

class CollectionTableFooter extends Component {
  static propTypes = {
    collection: PropTypes.any
  };

  render() {
    const { collection } = this.props;
    const { query, config } = collection;
    return (
      <Pane
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        marginTop={12}
      >
        <Button
          iconBefore="double-chevron-left"
          width={100}
          appearance="minimal"
        >
          Previous
        </Button>
        <Popover
          position={Position.BOTTOM_LEFT}
          content={
            <Menu>
              <Menu.Group>
                {limits.map(val => (
                  <Menu.Item key={val} onSelect={() => this.onChangeLimit(val)}>
                    {val}
                  </Menu.Item>
                ))}
              </Menu.Group>
            </Menu>
          }
        >
          <Button width={100} appearance="minimal" />
        </Popover>
        <Button
          iconAfter="double-chevron-right"
          width={100}
          appearance="minimal"
        >
          Next
        </Button>
      </Pane>
    );
  }

  onChangeLimit = val => {
    this.props.collection.query.limit = val;
  };

  onNext = () => {
    // TODO
  };

  onPrevious = () => {
    // TODO
  };
}

export default observer(CollectionTableFooter);
