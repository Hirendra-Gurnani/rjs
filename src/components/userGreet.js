import React, { Component } from "react";

class UserGreet extends Component {
  constructor() {
    super();

    this.state = {
      isLogged: false,
    };
  }

  render() {
    return this.state.isLogged ? (
      <h1 className="text-center mt-1">Welcome Hirendra</h1>
    ) : (
      <h1 className="text-center">Welcome Guest</h1>
    );
    
    // let message = <h1 className="text-center">Welcome Guest</h1>;
    // var Login = () => {
    //   if (this.state.isLogged) {
    //     this.setState({
    //       isLogged: true,
    //     });
    //     message = <h1 className="text-center mt-1">Welcome Hirendra</h1>;
    //   } else {
    //     this.setState({
    //       isLogged: false,
    //     });
    //     message = <h1 className="text-center">Welcome Guest</h1>;
    //   }
    //   console.log("Login clicked");
    // };

    // return (
    //   <>
    //     <button onClick={() => Login()}>
    //       <h3>Login</h3>
    //     </button>
    //     {message}
    //   </>
    // );
    // if (this.state.isLogged) {
    //   return (
    //     <div className="text-center">
    //       <h1>Welcome Hirendra</h1>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div className="text-center">
    //       <h1>Welcome Guest</h1>
    //     </div>
    //   );
    // }
  }
}

export default UserGreet;
