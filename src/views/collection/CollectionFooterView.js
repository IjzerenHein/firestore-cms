import React, { Component } from "react";
import PropTypes from "prop-types";
import { Pane, Button, Popover, Position, Menu } from "evergreen-ui";
import { observer } from "../../app";

class CollectionFooterView extends Component {
  static propTypes = {
    collection: PropTypes.any
  };

  render() {
    const { collection } = this.props;
    const { query } = collection;
    return (
      <Pane
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        marginBottom={12}
      >
        <Button
          iconBefore="double-chevron-left"
          width={100}
          appearance="minimal"
        >
          Previous
        </Button>
        <Popover position={Position.BOTTOM_LEFT} content={this.renderLimitMenu}>
          <Button width={50} appearance="minimal">
            {query.limit}
          </Button>
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

  renderLimitMenu = ({ close }) => {
    return (
      <Menu>
        <Menu.OptionsGroup
          title="Limit"
          options={[
            { label: "20", value: 20 },
            { label: "50", value: 50 },
            { label: "200", value: 200 }
          ]}
          selected={this.props.collection.query.limit}
          onChange={value => {
            this.props.collection.query.limit = value;
            close();
          }}
        />
      </Menu>
    );
  };

  onNext = () => {
    // TODO
  };

  onPrevious = () => {
    // TODO
  };
}

export default observer(CollectionFooterView);
