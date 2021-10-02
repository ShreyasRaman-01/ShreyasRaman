import TypeAnimation from "./Typing_Animation";
import { SOCIAL_ICONS } from "./Social_Icons";
import PhotoLogo from "./Photo_Logo_Animation";

//importing the CSS styling for the front page
import "./Front_Page.css";

//Frontpage class containing all the front page elements: coin animation for main logo + contact links + typing animation
const FrontPage = () => {
  return (
    //div containing social media links
    <div className="home-page">
      <PhotoLogo />

      <div className="social-links-div">
        <ul className="social-menu">
          {SOCIAL_ICONS.map((item, index) => {
            return (
              <li key={index} className="social-li">
                {" "}
                <a className={item.cName} href={item.url}>
                  {" "}
                  <i className={item.icon_pic}> </i>{" "}
                </a>{" "}
              </li>
            );
          })}
        </ul>
      </div>

      {/* div containing main fade-in text on home page */}
      <div className="home-text">
        <h1 className="bold-title-1">Hi, I'm Shreyas Raman</h1>
      </div>

      <TypeAnimation />
    </div>
  );
};

export default FrontPage;
