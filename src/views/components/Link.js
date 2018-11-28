import React from 'react';
import { Link as EvergreenLink } from 'evergreen-ui';
import { Link as ReactRouterLink } from 'react-router-dom';

const Link = props =>
  <EvergreenLink is={ReactRouterLink} {...props} />;

export default Link;
