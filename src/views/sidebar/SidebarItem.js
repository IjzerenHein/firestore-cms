import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Pane, Icon, Heading } from 'evergreen-ui'

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
            background={isSelected ? "overlay" : undefined}>
            <Icon icon={icon} marginRight={8} size={20} />
            <Heading size={400}>{text}</Heading>
        </Pane>
    );
  }
}

export default SidebarItem;
