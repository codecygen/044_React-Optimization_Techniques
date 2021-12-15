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

- React-useCallback-PreventReRender

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