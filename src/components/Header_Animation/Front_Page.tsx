import React, {Component} from "react";
import Type_Animation from './Typing_Animation';
import { SocialIcons } from "./Social_Icons";
import PhotoLogo from "./Photo_Logo_Animation";
import AnimatedArrow from "./See_More_Arrow";

//importing the CSS styling for the front page
import './Front_Page.css';


//Frontpage class containing all the front page elements: coin animation for main logo + contact links + typing animation
class Front_Page extends Component {


    //function to render the home page elements on the react app
    render(){

        return(

            //div containing social media links
            <div className = "home-page">

            <PhotoLogo />

            <div className = "social-links-div">
                <ul className="social-menu">
                {SocialIcons.map( (item, index) => { 
                        return (<li key={index} className='social-li'> <a className={item.cName} href = {item.url}>  <i className={item.icon_pic} > </i> </a>  </li>)  
                    
                    } )}
                </ul>

            </div>



            {/* div containing main fade-in text on home page */}
            <div className = "home-text"> 


            <h1 className = 'bold-title-1'> 
                Hi,  
            </h1> 
            <h1 className = 'bold-title-2'>I'm Shreyas Raman </h1>


            <Type_Animation/> 
            

            </div>
                

            </div>
            

        )
    }

}

export default Front_Page;