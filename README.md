You will always know when to use which method as you get better in React. Sometimes your app will slow down and you would like to prevent it from getting slower. Here are some of the examples that are bound to this project.

Searchable Keywords
- React-PreventReRender
- React-useCallback-PreventReRender
- React-useMemo-PreventReCalculation

### Preventing the Re-Rendering of Sub-Components
SEARCHABLE KEYWORD  
- React-PreventReRender

React.memo();

It means, only when the props of the component changes, the component should be re-executed. This comes with a drawback.

Here React memorizes that this component should not be re-rendered unless the props changed. This comes with a trade-off. You tell React to memorize previous props so it does not re-render it unnecessarily unless the props of the component has changed. You are trading off the performance cost of re-evaluating the component to the performance cost of memorizing the previous props for comparison. Which one is better is a question that depends on your project, how many components you have with React.memo() and how many children the components has.

For larger apps it is needed.
For components in which props are always changed this is not needed.

Think about a button component that has a props which triggers a function. In this case, even if we wrap the button component with React.memo(), it still re-evaluates the button compoenent. This is because of a javascript thing. Javascript always compares previous props with the current props. For basic data types such as strings and numbers this comparison will return true.

```javascript
'text' === 'text
2 === 2
// Returns true
```

But for a function, object or arrays, it will return false.
```javascript
[1, 2, 3] === [1, 2, 3]
{text: 1} === {text: 1}
// Returns false
```


So when props are compared, if the props has a function, function comparison returns false hence, the button component will be re-evaluated.

### Preventing the Re-Rendering of Sub-Components with Function Passed as Props
SEARCHABLE KEYWORD  
- React-useCallback-PreventReRender

useCallback is used for functions.

In order to prevent this, call useCallBack function.

In this method, what the system will do is given down below,

```javascript
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
array1 = array2
array1 === array2
// Will return true because here array1 is pointing array2 
// instead of being a separate array.ss
```

### useState - Ensuring that Previous State will be Updated
Because there could be multiple states and React prioritizes the states, some of the states might have a higher priority over the others, this might cause issues if you don't use the previous state in set functions of the "useState" hook. Because it will ensure that not the state that the React component last time was re-rendered is being used, but the last state is being taken into account and new state set based on the old state.

```javascript
setObject((prevState) => ({
  ...prevState,
  secondKey: 'value',
}));
```

### useMemo - Preventing Resource Heavy Calculation in Future Renders
SEARCHABLE KEYWORD  
- React-useMemo-PreventReCalculation

useMemo is used for values such as objects and arrays.

Sometimes only a part of the component needs to be prevented from calculation upon each re-rendering of the component. In our code example, the detail example is given.

You should only use "useMemo" for calculations that are resource intensive.



# When to use useMemo and useCallback

#1)  useMemo:  Used for values.

Technically,  it can be used for component memoization.

Prefer to use memo for functional components.

- - - - - - - - -

useMemo invokes its wrapped function &

returns the result of its wrapped function.

- - - - - - - - -

It's second argument is a dependency array.

https://reactjs.org/docs/hooks-reference.html#usememo

-----------------------------------------

#2)  memo:  Used for functional components.

It's second argument is a dependency (callback) function.

https://reactjs.org/docs/react-api.html#reactmemo

-----------------------------------------

#3)  useCallback:  Used for functions.

If memo (or useMemo) won't work,

because one of its dependency functions is

unnecessarily re-created (a new reference), 

useCallback will memoize that dependency function

so memo (or useMemo) sees the same (consistent) reference.

- - - - - - - - -

Often used to prevent an infinite loop (same reason as above).

- - - - - - - - -

useCallback does not invoke its wrapped function &

returns that wrapped function.   Reminder (below):

useMemo invokes its wrapped function &

returns the result of its wrapped function.

- - - - - - - - -

useCallback's second argument is a dependency array.

https://reactjs.org/docs/hooks-reference.html#usecallback

==============================

ADDITIONAL  INFORMATION:

memo offers a dependency function.

PureComponent does not.

The a dependency function is very important

for surgically controlling the optimization.

- - - - - - - - - - - - - - - - -

shouldComponentUpdate offers a way

to fine tune (or target) the optimization.

By returning a boolean.

- - - - - - - - - - - - - - - - -

Unless you know how PureComponent

will affect your app,  PureComponent can be like:

"Trying to catch a fish using dynamite".

---------------------------------------

memo,  PureComponent & shouldComponentUpdate:

Tell the render method;

Do your virtual DOM cashing & non-caching (see image)

you normally do (meaning:  Run your calculations),  or,

use the previous (full) cache snapshot

(meaning:  Don't run the virtual DOM calculations, 

just use cache).