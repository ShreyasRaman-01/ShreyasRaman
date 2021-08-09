import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import Front_Page from './components/Header_Animation/Front_Page';
import AboutCard from './components/About_Me/About_Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Front_Page />      */}

      <AboutCard />

    </div>
  );
}

export default App;
