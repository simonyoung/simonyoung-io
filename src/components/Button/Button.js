import React, { Component } from 'react';
import { divideColor } from 'tailwindcss/defaultTheme';

class Button extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <div onClick={this.props.onClick} {...props}>
        {this.props.children}
      </div>
    );
  }
}

export default Button;
