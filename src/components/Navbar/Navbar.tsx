import React, {Component} from 'react';
import { MenuItems } from './MenuItems';

//importing the CSS styling for Navbar
import './Navbar.css'


//Navbar class containing the nav bar element: using class since class state is utilized
class Navbar extends Component {

    //boolean to track if the navbar logo is clicked
    state = {clicked: false}

    //handleClick function to set the state for the menu icon i.e. either 3 lines or 'x' to close upon clicking menu
    handleClick = () => {
        //updating the 'state' to the opposite of the current 'state' (i.e. True if False and False if True) when menu clicked
        this.setState( { clicked: !this.state.clicked} )
    }
    
    //function to render element on React App
    render(){
        return (

            //nav bar DOM element
            <nav className = "NavbarItems">
                
                <img src="media/logo_white.png" alt="site_icon" className="navbar-logo-image"/><h1 className="navbar-logo"> Shreyas </h1>
                
                
                <div className="menu-icon" onClick={this.handleClick} >

                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
                </div>

                
                <ul className ={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map( (item, index) => { 
                        return (<li key={index} > <a className={item.cName} href = {item.url}>  {item.page_name} </a>  </li>)  
                    
                    } )}

                </ul>
                
            </nav>
            
        )
    }

}


export default Navbar