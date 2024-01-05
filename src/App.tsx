import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects";
import FrontPage from "./components/Header_Animation/Front_Page";
import AboutCard from "./components/About_Me/About_Card";
import Skills from "./components/Skills";
// import Computer from "./icons/Computer";
import Research from "./components/Research";
import WorkExperience from "./components/Work_Experiences";
import FooterBar from "./components/Navbar/FooterBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
          
            <FrontPage />
            
            <AboutCard/>
            <Research/>
            <WorkExperience/>
            <Projects/>
            <Skills/>
            <FooterBar/>
          </Route>

          <Route path="/about">
            <AboutCard />
          </Route>

          <Route path="/research">
            <Research />
          </Route>

          <Route path="/work_experiences">
            <WorkExperience />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>

          <Route>
            <p>Error 404: Not Found</p>
          </Route>
        </Switch>
        
        
      </Router>
    </div>
  );
}

export default App;
