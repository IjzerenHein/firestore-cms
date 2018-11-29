import React, { Component } from "react";
import PropTypes from "prop-types";
import { Pane, Button, Select } from "evergreen-ui";
import { observer } from "../../app";

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
        marginTop={8}
      >
        <Button iconBefore="double-chevron-left" width={100}>
          Previous
        </Button>
        <Select value={query.limit} onChange={this.onChangeLimit} width={100}>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </Select>
        <Button iconAfter="double-chevron-right" width={100}>
          Next
        </Button>
      </Pane>
    );
  }

  onChangeLimit = event => {
    this.props.collection.query.limit = event.target.value;
  };

  onNext = () => {
    // TODO
  };

  onPrevious = () => {
    // TODO
  };
}

export default observer(CollectionTableFooter);
