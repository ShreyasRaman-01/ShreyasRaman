import React, {Component} from "react";

//importing CSS styling for the about card + swipe animation
import './About_Card.css'


class AboutCard extends Component{

    //boolean to track if the about card is clicked
    state = {clicked: false}

    //handleClick function to set the state for about me card i.e. either 3 lines or 'x' to close upon clicking menu
    handleClick = () => {
        //updating the 'state' to the opposite of the current 'state' (i.e. True if False and False if True) when menu clicked
        this.setState( { clicked: !this.state.clicked} )
    }
    

    //variable storing card content
    about_me_summary_content = "This is the summary text about me"
    about_me_long_content = "Long content about me"

    //function to render the about card
    render(){
        return(

            
             <div className='about-card-container'>

                 <div className='about-card' onClick={this.handleClick}>

                    <h2> About Me </h2>
                    <p> {this.state.clicked ? this.about_me_summary_content : this.about_me_long_content} </p>

                 </div>

                 <div className='shreyas-card'>
                    <img src='/media/shreyas_card_icon.jpg' alt='shreyas_card_icon1' className='shreyas-card-image' />
                 </div>

                 
                 {/* <img src='/media/brown_uni.png' alt='brown_uni_logo' className='brown-uni-image' /> */}
            </div>
            

        )
    }
}


export default AboutCard;