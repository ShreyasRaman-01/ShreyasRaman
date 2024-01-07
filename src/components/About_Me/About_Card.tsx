import React, { Component } from "react";
import CSS from "csstype";

//importing CSS styling for the about card + swipe animation
import "./About_Card.css";

const clicked_paragraph_style: CSS.Properties = {
  fontSize: "16px",
  width: "56vw",
  margin: "0",
};

class AboutCard extends Component {
  //boolean to track if the about card is clicked
  state = { clicked: false };

  //handleClick function to set the state for about me card i.e. either 3 lines or 'x' to close upon clicking menu
  handleClick = () => {
    //updating the 'state' to the opposite of the current 'state' (i.e. True if False and False if True) when menu clicked
    this.setState({ clicked: !this.state.clicked });
  };

  //variable storing card content
  about_me_summary_content = (
    <ul>
      <li>
        {" "}
        Recently graduated: <b>ScB (with Honors) in Computer Science</b> @ Brown University {" "}
      </li>
      <li>
        {" "}
        Was fortunate to work on exciting research under the BigAI initiative with <b><a href="https://h2r.cs.brown.edu/people/" style={{color:"black", textDecoration:"none"}}>Prof. Stefanie Tellex</a></b> and <b><a href="https://cs.brown.edu/people/gdk/index.html" style={{color:"black", textDecoration:"none"}}>Prof. George Konidaris</a></b> and with <b><a href="https://serre-lab.clps.brown.edu/person/thomas-serre/" style={{color:"black", textDecoration:"none"}}>Prof. Thomas Serre</a></b> in Serre Labs
      </li>
      <li>
        {" "}
        I ❤️ everything about <b>multimodal AI and ML</b>: Comp. Vision, NLP, RL and Decision Trees. Especially their <b>applications to autonomous agents and robots</b>
        {" "}
      </li>
      <li>
        {" "}
        Outside of this, I am always eager to explore the unknown,learn something new {" "}
        and help others along the way 😃{" "}
      </li>
      <li>
        {" "}
        I competitively play chess [@shreyasraman on chess.com] and like to play 🏀, 🏓
      </li>
      <li>
        I also dabble with creative writing + poetry and blockchain technology
      </li>
    </ul>
  );

  
  about_me_long_content = (
    <p style={clicked_paragraph_style}>
      {" "}
      Hey there, welcome to my website! My name is Shreyas. <br />
      <br /> I am a <b>researcher and software developer</b>, eager
      to enable human-like reasoning and better conceptual abstractions using the power of multimodal AI and big data with autonomous agents. I have always enjoyed
      physics/mechanics, but in my first semester at Brown, I{" "}
      <b>
        fell in love with a completely new world of computer science
      </b>
      . <br />
      <br /> During my undergraduate degree, I have cultivated a{" "}
      <b>
        strong passion for programming and artificial intelligence - multimodal AI like computer vision or natural language processing applied with reinforcement learning and deep learning in particular
      </b>
      . Thanks to my courses, I now know <b>Python, Java, MATLAB, Solidity, Go and C</b>{" "}
      and am self-taught in <b>SQL, HTML, Javascript and Typescript</b> :){" "}
      <br /> I had the opportunity to do some interesting projects + research in these areas, check them out below! <br />
      <br /> Aside from this, I was actively involved in{" "}
      <b>Brown's Chess + Table Tennis clubs</b>; I supported the{" "}
      <b>"Brown Space Engineering" (BSE)</b> group with CubeSAT missions,  served as a head teaching assistant and Mieklejohn peer mentor. I also helped students in Providence highschools to accelerate their
      learning. I enjoy working on the seams between the digital/physical worlds
      and want to use multimodal AI to blend the lines between them.{" "}
    </p>
  );

  //function to render the about card
  render() {
    return (
      <div className="about-card-container">
        <div className="about-card">
          <div className="about-header">
            <h2> About Me </h2>
            <span className="learn-more-me" onClick={this.handleClick}>
              {this.state.clicked ? "Close" : "Learn More"}
            </span>
          </div>

          <div
            className={
              this.state.clicked
                ? "about-card-content-clicked"
                : "about-card-content"
            }
          >
            {" "}
            {this.state.clicked
              ? this.about_me_long_content
              : this.about_me_summary_content}{" "}
          </div>
        </div>

        <div className="shreyas-card">
          <div className="shreyas-card-inner">
            <div className="shreyas-card-front">
              <img
                src="media/shreyas_card_icon.jpg"
                alt="shreyas_card_icon1"
                className="shreyas-card-image-front"
              />
            </div>

            <div className="shreyas-card-back">
            <h3> Shreyas' Fun Facts : </h3>
            <ul>
              <li>
                My to-go Pokémon Team includes: <b>Lapras</b>, <b>Shedinja</b>, <b>Lucario</b>{" "}
                and <b>Linoone</b>
              </li>
              <li>
                Absolutely love <b>Middle Eastern</b> and <b>Italian</b> food!
              </li>
              <li>
                <b>Pani Puri</b> is the best Chaat
              </li>
              <li>I'm ambidextrous!</li>

              <li> A 🐶 person: adore <b>GSDs</b></li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutCard;
