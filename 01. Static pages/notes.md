# Learn React

This is my journey to learn react framework from [Learn React on freeCodeCamp](https://youtu.be/x4rFhThSX04)

## Libraries vs. Frameworks

|            | Library                                                          | Framework                                           |
|------------|------------------------------------------------------------------|-----------------------------------------------------|
| Definition | Collection of reusable Code                                      | Predetermined architecture                          |
|            | Reduces the need to write repetitive/complex things from scratch | You follow a specified pattern of development       |
| Control    | You control how/when it's used. No/few boundaries                | You work within the boundaries set by the framework |
| Guidelines | No strict "right" or "wrong" ways to use it                      | "Right" and "wrong" ways to use it                  |

React is a Library per definition

## History

- 2006: jQuery
- 2010: AngularJS, amber, Backbone.js
- 2013: Angular, Vue.js, React
- 2016: svelte, next.js
- 2020+: Remix, Solid, Astro, qwik...

## React Features

- **Composable**: Can create easily reusable and interchangeable "pieces of the web" that can be combined in various ways to create complex systems.
- **Declarative**: Can lean on the library to handle the manual, tedious tasks that we otherwise would have to worry about ourselves.
    - Declarative vs Imperative:
        - Declarative: "What should be done?"
          `Just tell me what needs to happen, and I will take care`
        - Imperative: "How should be done?"
          `Describe me every step on how to do something, and I'll do it.`

## Other Notes

### Framework Tag

The `<Framework />` tag can be used as a wrap element in React to encapsulate child components or content. It could represent a higher-order component or a custom wrapper that provides a certain
context, layout, or functionality to its children.

#### Example usage of a `<Framework />` wrapping element:

```jsx
// Framework.js
import React from 'react';

const Framework = ({children}) => {
    return (
        <div className="framework-wrapper">
            {children}
        </div>
    );
};

export default Framework;
```

```jsx
// Example usage in App.js
import React from 'react';
import Framework from './Framework';

const App = () => {
    return (
        <Framework>
            <h1>Welcome to React</h1>
            <p>This is wrapped inside the Framework component.</p>
        </Framework>
    );
};

export default App;
```

In this example:

- The `<Framework />` component wraps its children (`<h1>` and `<p>` tags), offering a structural or functional encapsulation.
- The component is implementing the "Composition" pattern, a core feature in React's design philosophy, which makes components more reusable and modular.

---

#### Empty Tag Feature

React also supports the use of empty tags `<>` (also called React Fragments) to wrap multiple children without adding additional nodes (such as `div`) to the DOM. This is useful when you don't need
the structural encapsulation of a custom wrapper.

#### Example usage of empty tags:

```jsx
const App = () => {
    return (
        <>
            <h1>Welcome to React</h1>
            <p>This content is wrapped using React's fragment feature.</p>
        </>
    );
};

export default App;
```

In this example:

- The `<>` (short syntax for `React.Fragment`) is used to group multiple elements without creating unnecessary DOM nodes.
- This is especially useful when creating components that return adjacent JSX elements but don't need additional structural wrappers.

Both `<Framework />` and the empty tag feature provide different ways to wrap components based on the requirements of the application.

### className

In React, `className` is used to apply CSS classes to elements, as opposed to the plain `class` attribute used in standard HTML. This is because the word `class` is a reserved keyword in JavaScript,
so React uses `className` instead.

#### Example usage:

```jsx
const App = () => {
    return (
        <div className="container">
            <h1 className="title">Welcome to React</h1>
            <p className="description">This is an example of using the className attribute.</p>
        </div>
    );
};

export default App;
```

#### Key Notes:

- `className` is a string that can include one or more space-separated class names.
- It works the same way as the `class` attribute in HTML, but you must use `className` in React.

#### Dynamic classNames:

You can also dynamically add classes using JavaScript expressions or libraries like `clsx`.

##### Example with JavaScript expressions:

```jsx
const App = () => {
    const isPrimary = true;

    return (
        <button className={isPrimary ? 'btn-primary' : 'btn-secondary'}>
            Click Me
        </button>
    );
};

export default App;
```

##### Example with `clsx` library:

```jsx
import clsx from 'clsx';

const App = () => {
    const isPrimary = true;
    const isDisabled = false;

    return (
        <button className={clsx('btn', isPrimary && 'btn-primary', isDisabled && 'btn-disabled')}>
            Click Me
        </button>
    );
};

export default App;
```

In this example:

- `clsx` intelligently combines class names based on conditions, making it easier to manage complex class lists.

