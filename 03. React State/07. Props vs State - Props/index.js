function addTwoNumbers(a, b) {
  return a + b;
}

console.log(addTwoNumbers(2, 3));

function Navbar(props) {
  props.logoIcon = "some-other-icon";  // DO NOT DO THIS
  return <div>Navbar</div>;
}