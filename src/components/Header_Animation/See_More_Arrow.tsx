import React, {Component} from "react";

//importing CSS styling for see more arrow 
import './See_More_Arrow.css'


//AnimatedArrow class containing all svg elements making the see more arrow
class AnimatedArrow extends Component{

    //function to render the arrow
    render(){
        return(

            //div containing the animated arrow svg elements
            <div className='animated-arrow-container'>

                <svg id="more-arrows">

                <polygon className="arrow-top" points="39.6,27.9 3.8,1.3 5.3,0 39.6,25.3 69.9,0 71.7,1.3 "/>
                <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
                <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
                
                </svg>
            </div>



        )
    }

}

export default AnimatedArrow
