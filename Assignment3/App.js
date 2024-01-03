import React from "react";
import ReactDOM from "react-dom/client";
import "./Assignment3.css";
import logo from "./logo.png";
import userIcon from "./usericon.png";

// Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
const header = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "I'm an h1 tag"),
  React.createElement("h2", {}, "I'm an h2 tag"),
  React.createElement("h3", {}, "I'm an h3 tag"),
]);

// Q: Create the same element using JSX
const header1 = (
  <div className="title">
    <h1>I'm an h1 tag</h1>
    <h2>I'm an h2 tag</h2>
    <h3>I'm an h3 tag</h3>
  </div>
);

// Q: Create a functional component of the same with JSX
const Header2 = () => {
  return (
    <div className="title">
      <h1>I'm an h1 tag</h1>
      <h2>I'm an h2 tag</h2>
      <h3>I'm an h3 tag</h3>
    </div>
  );
};

// Q: Pass attribute into the tag in JSX
const Header3 = () => {
  return (
    <div className="title">
      <h1 style={{ color: "red" }}>I'm an h1 tag</h1>
      <h2 style={{ color: "blue" }}>I'm an h2 tag</h2>
      <h3 style={{ color: "green" }}>I'm an h3 tag</h3>
    </div>
  );
};

// Q: Composition of Component (Add a component inside another)
const title = <h1>Hey I'm title</h1>;

const HeaderComponent = () => {
  return (
    <div className="title">
      {title}
      <h2>Hey I'm Header Component</h2>
    </div>
  );
};

// Q: Create a Header Component from scratch using Functional Component with JSX
// Add a Logo on Left
// Add a search bar in middle
// Add User icon on right
// Add CSS to make it look nice

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="left">
          <img src={logo} alt="logo" />
        </div>
        <div className="middle">
          <input className="input" type="text" />
          <button type="submit">Submit</button>
        </div>
        <div className="right">
          <img src={userIcon} alt="User Icon" />
        </div>
      </header>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
