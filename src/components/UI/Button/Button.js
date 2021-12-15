import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button RUNNING');
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// React-PreventReRender
// React-FunctionOptimization
// This prevents 'Button' component from being
// re-rendered when the parent component 'App'
// gets re-rendered (Unless the props of
// 'Button' component changes.)
export default React.memo(Button);