import { render } from "@testing-library/react";
import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import App from "../App";
import "../App.css";

export default class Login extends Component {
    state = {
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: ""
    };
  
    
    responseFacebook = response => {
       console.log(response);
  
      this.setState({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.clientSecret,
        picture: response.picture.data.url
      });
    };
  
    componentClicked = () => console.log("clicked");

    render() {
      let fbContent;

      if (this.state.isLoggedIn) {
        fbContent = (
            <>
          <div className="fb_content"
          >
            <img className="fbimg" src={this.state.picture} alt={this.state.name} />
            <h2 className="heading">Welcome <span className="spaning">{this.state.name}</span></h2>
          </div>
          <App />
          </>
        );
      } else {
        fbContent = (
          <FacebookLogin 
            appId="1998445023626777"
           autoLoad={false}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
           // scope="public_profile,user_friends,user_actions.Test"
          //  callback={this.responseFacebook}
          />
        );
      }
  
      return <div>{fbContent}</div>;
    }
  };