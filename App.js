const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");

console.log(heading);  //it returns an object

const root = ReactDOM.createRoot(document.getElementById("root"));


// Now how to write a complex HTML in React 
// <div id="parent">
//     <div id="child">
//         <h1>I'm h1 tag</h1>
//         <h2>I'm h2 tag</h2>
//     </div>
// </div>

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, 
    [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")]
    ));


root.render(parent);