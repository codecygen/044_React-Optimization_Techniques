// React-useCallback-PreventReRender
// React-useMemo-PreventReCalculation
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

  // Here in this case, in Javascript all the variables will be stored to be used later.
  // So if for some reason you would like to change a variable inside the function, you
  // cannot do it because of the javascript nature. Because of the Javascript's 'Closures'
  // concept, Javascript will not allow that. This is why we have dependency function so,
  // in case we would like to keep track of a changing variable that is controlled outside
  // the scope of the function, then we can add that variable as a dependency to the 'useCallback'
  // function.

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  // React-useMemo-PreventReCalculation
  // Here on this level, we also need to wrap the array
  // with useMemo so React will realize this array is same
  // with the array last time the "App" was rendered.
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
