import React, {Component} from "react";
import CSS from 'csstype';

//importing CSS styling for the about card + swipe animation
import './About_Card.css'



const clicked_paragraph_style: CSS.Properties = {
    fontSize: '16px',
    width: '56vw',
    margin: '0',
}


class AboutCard extends Component{

    //boolean to track if the about card is clicked
    state = {clicked: false}

    //handleClick function to set the state for about me card i.e. either 3 lines or 'x' to close upon clicking menu
    handleClick = () => {
        //updating the 'state' to the opposite of the current 'state' (i.e. True if False and False if True) when menu clicked
        this.setState( { clicked: !this.state.clicked} )
    }
    

    //variable storing card content
    about_me_summary_content = <ul> 
                                <li> Rising junior pursuing an ScB in <b>Computer Science @ Brown University</b> </li> 
                                <li> ❤️ everything about  ML: Decision Trees, Comp. Vision, NLP, Reinforcement Learning </li>
                                <li> Tenacious <b>ML researcher</b>, ML <b>model tinkerer</b> and <b>optimizer</b> </li>
                                <li> Frequent <b>chess player</b>: main the Sicilian Defence [hmu @shreyasraman on chess.com]</li>
                                <li> Always eager to <b>explore the unknown</b>, <b>learn something new</b> and <b>help others</b> along the way  😃 </li>
                                <li> From the land of 🌶 and 🐯 ➡ 🇮🇳</li>
                                <li> 🏀, 🏓 and <b>poetry</b> enthusiast </li>
                                </ul>
    about_me_long_content = <p style={clicked_paragraph_style} > Hey there! I'm Shreyas, nice to meet you. <br/><br/> I am an aspiring <b>ML researcher and software engineer</b>, eager to help fundamentally transform people's interaction with technology by leveraging the power of AI and data. I have always enjoyed physics/mechanics, but in my very first semester at Brown, I <b>explored a completely new world (to me) of computer science and fell in love</b>. <br/><br/> Over the past 2 years, I have cultivated a <b>strong passion for programming and machine learning - computer vision and deep learning in particular</b>. Thanks to my courses, I now "speak" <b>Python, Java, MATLAB and C</b> and I am self-taught in <b>SQL, HTML, Javascript and Typescript</b> :)  <br/> I have done some interesting projects + research with these; check them out below! <br/><br/> Aside from this, I am actively involved in <b>Brown's Chess + Table Tennis clubs</b>, I have supported the <b>"Space Engineering"</b> group in some of our recent CubeSAT missions and I help students in Providence highschools to accelerate their learning. I enjoy being at the seams between the digital/physical worlds and want to use ML to revolutionize (and blur) the lines between them. </p>

    //function to render the about card
    render(){
        return(

            
             <div className='about-card-container'>

                 <div className='about-card' onClick={this.handleClick}>

                    <h2> About Me </h2>
                    <p className = {this.state.clicked ? 'about-card-content-clicked':'about-card-content'}> {this.state.clicked ? this.about_me_long_content : this.about_me_summary_content} </p>

                 </div>
                
                 
                <div className='shreyas-card'>
                <div className='shreyas-card-front'>
                    <img src='/media/shreyas_card_icon.jpg' alt='shreyas_card_icon1' className='shreyas-card-image-front' />
                </div>

                <div className='shreyas-card-back'>
                    <h3> Shreyas' Fun Facts : </h3>
                    <ul>
                        <li>
                            My to-go Pokémon: <b>Lapras</b>, <b>Shedinja</b>, <b>Lucario</b> or <b>Linoone</b> 
                        </li>
                        <li>
                            I absolutely love <b>Middle Eastern</b> and <b>Italian</b> food!
                        </li>
                        <li>
                            <b>Pani Puri</b> is the GOAT of Chaat
                        </li>
                        <li>
                            Bread goes well with anything else
                        </li>
                    </ul>
                    
                </div>
                </div>
                
                 
            </div>
            

        )
    }
}


export default AboutCard;