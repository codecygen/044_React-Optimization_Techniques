// React-useMemo-PreventReCalculation
import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  // React-useMemo-PreventReCalculation
  // Here we destructure the props, because
  // we are only interested in "items" to be used
  // as a dependency in "useMemo" function. If we
  // include "props" as a dependency, when the title
  // changes, props will change. That's why "useMemo"
  // would try to run the function again. To prevent it,
  // we desctructure items from props and only use "items"
  // as a dependency
  const { items } = props;

  // React-useMemo-PreventReCalculation
  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return items.sort((a, b) => a - b);
  }, [items]); 
  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// React-PreventReRender
// This prevents 'DemoList' component from being
// re-rendered when the parent component 'App'
// gets re-rendered (Unless the props of
// 'DemoList' component changes.)
// Here the props of 'Demolist' component is a function
// Functions are always treated as differently in ever rendering
// of the parent component.
// For a solution to this, refer to 'App' component
export default React.memo(DemoList);
