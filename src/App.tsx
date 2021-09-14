import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import Front_Page from './components/Header_Animation/Front_Page';
import AboutCard from './components/About_Me/About_Card';
import Project_Box from './components/Projects/project_box';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Front_Page />      */}

      <AboutCard />

      {/* <Project_Box />
      <Project_Box />
      <Project_Box /> */}

    </div>
  );
}

export default App;
