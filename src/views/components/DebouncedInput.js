import { Component } from "react";
import PropTypes from "prop-types";

class DebouncedInput extends Component {
  static propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
    timeout: PropTypes.number.isRequired
  };

  static defaultProps = {
    timeout: 400
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  render() {
    return this.props.children({
      value: this.state.value,
      onChange: this.onChangeValue
    });
  }

  clearTimeout() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }
  }

  onChangeValue = event => {
    this.setState({
      value: event.target.value
    });
    this.clearTimeout();
    this.timer = setTimeout(() => {
      this.timer = undefined;
      this.props.onChange({
        target: {
          value: this.state.value
        }
      });
    }, this.props.timeout);
  };
}

export default DebouncedInput;
