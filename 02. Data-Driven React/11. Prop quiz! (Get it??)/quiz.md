1. What do props help us accomplish?

    pass data to structure

2. How do you pass a prop into a component?

    using a JavaScript Object

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   
    no, Object does not contain this element

4. How do I receive props in a component?
function Navbar(props) {
    return (
        <header>
   {props.header}
        </header>
    )
}


5. What data type is `props` when the component receives it?

    object