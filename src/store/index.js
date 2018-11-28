import PropTypes from "prop-types";
import storeObserver from "./storeObserver";
import { observer, inject } from "mobx-react";

const StorePropType = PropTypes.object.isRequired;

export { storeObserver, StorePropType, observer, inject };
