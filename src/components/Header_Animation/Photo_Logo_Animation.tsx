import React, { Component } from "react";

//importing the CSS styling for the photo logo
import "./Photo_Logo_Animation.css";

//PhotoLogo class containing the animated photo logo element
class PhotoLogo extends Component {
  state = { clicked: false }; //tracks if the photo icon has been clicked

  //handleClick function to set the state for the menu icon
  handleClick = () => {
    //updating the 'state' to the opposite of the current 'state' (i.e. True if False and False if True) when menu clicked
    this.setState({ clicked: !this.state.clicked });
  };

  //funtion to render the element in the react app
  render() {
    return (
      //DOM elements for photo logo
      <div className="photo-container" onClick={this.handleClick}>
        <img
          src="media/shreyas_icon.jpeg"
          alt="Shreyas"
          className="main-icon-photo"
          id="shreyas"
        />
      </div>
    );
  }
}

export default PhotoLogo;
