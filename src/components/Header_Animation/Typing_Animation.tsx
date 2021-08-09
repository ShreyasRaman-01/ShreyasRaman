import React, {Component} from 'react';
import Typewriter from 'typewriter-effect';
//importing the CSS styling for Navbar
import './Typing_Animation.css';


//Typing Animation constant text containing the typing animation text component
const Type_Animation = () => {

    return(
        
        <div className = "typing-animation">

            <div className = "typing-text">
            
            <p className = 'static-text'> I </p>

            <Typewriter options = {{
                autoStart:true, loop: true, delay:70,
                
                strings: [
                    "am a machine learning researcher",
                    "❤️ data + data science",
                    "enjoy software developement",
                    "like designing websites",
                    "am an avid chess player ♟️",
                    "play the guitar 🎸",
                    "enjoy writing poetry 🖋️",
                    ""
                ]
            }} />
            
            
            </div>

        </div>
    )
}
export default Type_Animation