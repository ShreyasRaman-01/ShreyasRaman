import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects";
import FrontPage from "./components/Header_Animation/Front_Page";
import AboutCard from "./components/About_Me/About_Card";
import Skills from "./components/Skills";
import Computer from "./icons/Computer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <FrontPage />
            {/* <AboutCard/> */}
            <Projects/>
            <Skills/>
          </Route>

          <Route path="/about">
            <AboutCard />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/skills">
            <Skills />
          </Route>

          <Route>
            <p>404: Not Found</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
