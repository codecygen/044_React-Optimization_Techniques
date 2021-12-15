// React-useCallback-PreventReRender
import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');

  // React-useCallback-PreventReRender
  // Simply wrap the function with useCallback
  // So it will not re-render the props that passes
  // function 'changeTitleHandler', 'onClick' props of 'Button' component. 
  // Because everytime the 'App.js' component
  // gets re-rendered, Button component will also be re-rendered
  // because function "changeTitleHandler" will be treated as a different function in
  // every re-render unlike props that has simple variables such as a String or a Number.
  // because '2' === '2' will return true however myFunc === myFunc will return false.
  // or obj1 === obj2 or array1 === array2 will return false. Because it is a javascript
  // fact. Javascript does not think they are exactly same.
  // So you need to wrap the props function with 'useCallback' function. This wrapping,
  // will help react to understand that the 'changeTitleHandler' functions are always same
  // So it will not re-render 'Button' component, everytime the 'App' component gets
  // re-rendered. 'useCallback' has dependency. If you leave it blank, React
  // guarantees us that it will run the function only the first time. So the function will
  // never change and it will always be re-used.

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
