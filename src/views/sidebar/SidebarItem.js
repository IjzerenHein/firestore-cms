import React, { Component } from "react";
import PropTypes from "prop-types";
import { Pane, Icon, Text, Strong } from "evergreen-ui";

class SidebarItem extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    isSelected: PropTypes.bool
  };

  render() {
    const { text, icon, isSelected } = this.props;
    return (
      <Pane
        paddingY={12}
        paddingX={20}
        display="flex"
        flexDirection="row"
        alignItems="center"
        background={isSelected ? "blueTint" : undefined}
        elevation={isSelected ? 0 : undefined}
      >
        <Icon
          icon={icon}
          marginRight={8}
          size={20}
          color={isSelected ? "selected" : "muted"}
        />
        <Text size={400} flex={1}>
          <Strong color={isSelected ? "selected" : "muted"}>{text}</Strong>
        </Text>
        {isSelected ? (
          <Icon icon="chevron-right" size={20} color="selected" />
        ) : (
          undefined
        )}
      </Pane>
    );
  }
}

export default SidebarItem;
