import React from "react";
import Typewriter from "typewriter-effect";
//importing the CSS styling for Navbar
import "./Typing_Animation.css";

//Typing Animation constant text containing the typing animation text component
const TypeAnimation = () => {
  return (
    <div className="typing-animation">
      <div className="typing-text">
        <div className="static-text">
          I&nbsp;
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 70,

              strings: [
                "am a machine learning researcher",
                "❤️ data + data science",
                "enjoy software development",
                "am an avid chess player ♟️",
                "play the guitar 🎸",
                "enjoy writing poetry 🖋️",
                "",
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default TypeAnimation;
