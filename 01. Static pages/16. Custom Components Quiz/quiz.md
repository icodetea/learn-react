1. What is a React component? 

    a decoupled element that can be used by a reference. 

    a function that returns react elements

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

function is not used

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```
it should be `root.render(<Header/>)`