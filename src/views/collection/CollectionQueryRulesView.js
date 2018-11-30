import React, { Component } from "react";
import { PropTypes } from "mobx-react";
import { observer } from "../../app";
import { Card, Alert } from "evergreen-ui";
import CollectionQueryRuleView from "./CollectionQueryRuleView";

class CollectionQueryRulesView extends Component {
  static propTypes = {
    collection: PropTypes.any
  };

  render() {
    const { collection } = this.props;
    const { query } = collection;
    if (!query.rules.length) {
      return this.renderPlaceholder();
    }
    return (
      <Card elevation={1} marginY={8}>
        {query.rules.map(rule => (
          <CollectionQueryRuleView
            key={rule.id}
            collection={collection}
            rule={rule}
          />
        ))}
      </Card>
    );
  }

  renderPlaceholder() {
    return (
      <Alert intent="none" title="No column selected" marginY={8}>
        Click on a column below to order and filter data on that field
      </Alert>
    );
  }
}

export default observer(CollectionQueryRulesView);
