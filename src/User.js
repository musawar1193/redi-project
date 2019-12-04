import React from "react";
import styled from "styled-components";

class User extends React.Component {
  render() {
    return (
      <div>
        <AppBar title="Login" />
        <TextField
          hintText="Enter your Username"
          floatingLabelText="Username"
          onChange={(event, newValue) => this.setState({ username: newValue })}
        />
        <br />
        <TextField
          type="password"
          hintText="Enter your Password"
          floatingLabelText="Password"
          onChange={(event, newValue) => this.setState({ password: newValue })}
        />
        <br />
        <TextField
          label="repeat password"
          primary={true}
          style={style}
          onClick={event => this.handleClick(event)}
        />
      </div>
    );
  }
}

export default User;
