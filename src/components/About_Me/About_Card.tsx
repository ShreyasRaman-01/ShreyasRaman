import React, { Component } from "react";
import CSS from "csstype";
import { Link } from 'react-router-dom';

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
        Welcome to my personal website! My name is Shreyas Raman{" "}
      </li>
      <li>
        {" "}
        I graduted from Brown University with an <b>ScB & MSc (Honors) in Computer Science</b>, grateful to do <Link to="/research">research</Link> with the BigAI initiative under <b><a href="https://h2r.cs.brown.edu/people/" style={{color:"black", textDecoration:"none"}}>Prof. Stefanie Tellex</a></b> and <b><a href="https://cs.brown.edu/people/gdk/index.html" style={{color:"black", textDecoration:"none"}}>Prof. George Konidaris</a></b>, as well as <b><a href="https://randallbalestriero.github.io/" style={{color:"black", textDecoration:"none"}}>Prof. Randall Balestriero</a></b> and <b><a href="https://serre-lab.clps.brown.edu/person/thomas-serre/" style={{color:"black", textDecoration:"none"}}>Prof. Thomas Serre</a></b>
        {" "}
      </li>
      <li>
        {" "}
        My research focus towards a PhD is on <b>enhancing embodied AI</b> by learning <b>composable abstractions of multimodal observations</b> (vision, audio, language, haptic etc...){" "}
      </li>
      <li>
        {" "}
        Outside research, I like: competitive <a href="https://chess.com/member/shreyasraman" style={{color:"black", textDecoration:"none"}}>chess ♚</a>, <a href="https://www.goodreads.com/user/show/185687235-shreyas-raman" style={{color:"black", textDecoration:"none"}}>reading 📚</a>, boxing 🥊, mentorship 🧑‍🏫, <a href="https://medium.com/@shreyas_sundara_raman" style={{color:"black", textDecoration:"none"}}>poetry</a> 🖊️, guitar 🎸 and technical <Link to="/projects">projects</Link>{" "}
      </li>
      <li>
        {" "}
        If you'd like to <b>know more about me or reach out</b>, please use the social links above or use my <a href="https://medium.com/@shreyas_sundara_raman" style={{color:"black", textDecoration:"none"}}>blog</a>{" "}
      </li>
    </ul>
  );

  
  about_me_long_content = (
    <p style={clicked_paragraph_style}>
      {" "}
      Hey there, welcome to my personal website! My name is Shreyas Raman. I graduated with ScB & MSc (Honors) in Computer Science at Brown University<br />
      <br /> I am a <b>researcher and roboticist</b> currently pursuing a PhD, eager
      to enable human-like reasoning and better composable abstractions for autonomous agents using multimodal AI e.g. across visual, audio, language or haptic data. Though I always enjoyed
      physics/engineering, in my first semester at Brown University, I{" "}
      <b>fell in love with a completely new world of computer science.</b>
      <br /> Over undergrad, my <Link to="/research" style={{color:"black", textDecoration:"none"}}>research experience</Link> across 9 projects accepted at 6 conferences has cultivated a{" "}
      <b>strong passion for multimodal AI (computer vision, natural language processing or reinforcement learning) applied to help agents/robots improve generalization to novel tasks, thereby making agents meaningfully independent and simplifying human-agent interactions.</b> Several interesting <Link to="/projects" style={{color:"black", textDecoration:"none"}}>projects</Link> over this time have also made me familiar with <b>Python, Java, MATLAB, Solidity, Go and C</b>{" "}
      and am self-taught in <b>SQL, HTML, Javascript and Typescript</b>. Please check them out!{" "}
      <br /> Aside from research, I am actively involved in{" "}
      <b>Brown's Chess club</b>; I supported the{" "}
      <b>"Brown Space Engineering" (BSE)</b> group with CubeSAT missions; I served as a <b>head TA for CSCI1410</b>, <b>Meiklejohn</b> peer mentor and <b>tutor to local highschool students</b> in Providence; I also dabble in <Link to="/blog" style={{color:"black", textDecoration:"none"}}><b>creative writing + poetry</b></Link>. I am keen to leverage my unique background to bridge my work beyond theory towards tangible impact.{" "}
    </p>
  );

  //function to render the about card
  render() {
    return (
      <div>
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
                src="media/shreyas_card_icon1.jpg"
                alt="shreyas_card_icon1"
                className="shreyas-card-image-front"
              />
            </div>

            <div className="shreyas-card-back">
            <h3> Fun facts about me: </h3>
            <ul>
              <li>
                I am ambidextrous
              </li>
              <li>
                I have lived in 5 countries and can speak 6 languages
              </li>
              <li>
                I know too many animal facts!
              </li>
              <li> 
                I love German Shepherd dogs 🐶
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>

      {/* finally add recent news in the bottom */}
      <div className="recent-news-section">
        <h2>Recent News</h2>
        <ul>
          <li>Applied to PhD programs in the 2025 cycle! Looking forward to results 🤞</li>
          <li>Reviewing for 2nd ever <a href="https://leap-workshop.github.io/" style={{color:"black", textDecoration:"none"}}>LEAP Workshop at CoRL 2024</a>!</li>
          <li>My paper <a href="https://openreview.net/pdf?id=5z8AJP5G8c" style={{color:"black", textDecoration:"none"}}>SkillWrapper</a> was accepted at LEAP, CoRL 2024</li>
          <li>Spending Winter 2023 at McKinsey & Co, developing a B2B AI Strategy </li>
          <li>Graduated ScB CS (Honors) with Magna-cum-laude & <a href="https://awards.cs.brown.edu/2024/05/06/twenty-eight-students-win-2024-brown-cs-senior-prizes/" style={{color:"black", textDecoration:"none"}}>Senior Prize</a> at Brown University</li>
        </ul>
      </div>
      </div>

    );
  }


}

export default AboutCard;
