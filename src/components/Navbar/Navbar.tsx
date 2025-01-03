import { Component } from "react";
import { NavLink } from "react-router-dom";
import { MenuItems } from "./MenuItems";

//importing the CSS styling for Navbar
import "./Navbar.css";

//Navbar class containing the nav bar element: using class since class state is utilized
class Navbar extends Component {
  //boolean to track if the navbar logo is clicked
  state = { clicked: false };

  //handleClick function to set the state for the menu icon i.e. either 3 lines or 'x' to close upon clicking menu
  handleClick = () => {
    //updating the 'state' to the opposite of the current 'state' (i.e. True if False and False if True) when menu clicked
    document.body.classList.toggle("avoid-overflow", !this.state.clicked);
    this.setState({ clicked: !this.state.clicked });
  };

  close = () => {
    document.body.classList.remove("avoid-overflow");
    this.setState({ clicked: false });
  };

  //function to render element on React App
  render() {
    return (
      //nav bar DOM element
      <nav className="NavbarItems">
        <NavLink to="/">
          <img
            src="media/logo_black.png"
            alt="site_icon"
            className="navbar-logo-image"
          />
        </NavLink>{" "}
        <NavLink to="/">
        <h1 className="navbar-logo"> Shreyas </h1>
        </NavLink>{" "}
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <div className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            
            const isExternal = item.url.startsWith("http");
            
            if (isExternal) {
              
              return (
                <a href={item.url}>
                  <span className="nav-links"> {item.page_name} </span>{""}
                </a>
              );

            } else {

              return (
                <NavLink
                  key={index}
                  activeClassName="active-link"
                  className="nav-li"
                  to={item.url}
                  onClick={this.close}
                >
                  {" "}
                  <span className="nav-links"> {item.page_name} </span>{""}
                </NavLink>
              );

            }
          })}
        </div>
      </nav>
    );
  }
}

export default Navbar;
