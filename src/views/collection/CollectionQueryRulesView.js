import React, { Component } from "react";
import { PropTypes } from "mobx-react";
import { observer } from "../../app";
import { Card } from "evergreen-ui";
import CollectionQueryRuleView from "./CollectionQueryRuleView";

class CollectionQueryRulesView extends Component {
  static propTypes = {
    collection: PropTypes.any
  };

  render() {
    const { collection } = this.props;
    const { query } = collection;
    return (
      <Card marginBottom={20} height={50} background="tint2" elevation={1}>
        {query.rules.map(rule => (
          <CollectionQueryRuleView key={rule.id} rule={rule} />
        ))}
      </Card>
    );
  }
}

export default observer(CollectionQueryRulesView);
