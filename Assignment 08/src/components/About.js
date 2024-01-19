import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  //Imp intervew question: in what order the functions will be called
  componentDidMount() {
    // console.log("Parent component did mount");
  }

  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is the best Food Page you will ever see by FoodSingh</h2>
        <UserClass name={"First"} location={"Rourkela class"} />
      </div>
    );
  }
}

export default About;
