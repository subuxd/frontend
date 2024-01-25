import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

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
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is the best Food Page you will ever see by FoodSingh</h2>
        <UserClass name={"First"} location={"Rourkela class"} />
      </div>
    );
  }
}

export default About;

// as we dont have useContext in class based component we have UserContext.Consumer and we will use it
