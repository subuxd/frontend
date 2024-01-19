import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //local state variable
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child component did mount");
    //we use this function to make API call just like useEffect() in functional component
    const data = await fetch(" https://api.github.com/users/subuxd");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const { name, location } = this.state.userInfo;

    // console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        <img
          src="https://avatars.githubusercontent.com/u/103200387?v=4"
          alt=""
        />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @subuxd</h4>
      </div>
    );
  }
}

export default UserClass;
