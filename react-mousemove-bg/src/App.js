import React from 'react';
import logo from './logo.svg';
import './App.css';
import Animated from './Animated';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <div className="balloon-animation">
        <Animated 
          className="flying-cloud"
          src='/cloud.png'
          ratioX="0.2"
          ratioY="0.23"        
        />
        <Animated 
          className="flying-cloud"
          src='/cloud.png'
          ratioX="0.26"
          ratioY="0.34"        
        />
        <Animated 
          className="flying-cloud"
          src='/cloud.png'
          ratioX="0.1"
          ratioY="0.11"        
        />
        <Animated 
          className="flying-cloud"
          src='/cloud.png'
          ratioX="0.13"
          ratioY="0.53"        
        />
        <Animated 
          className="flying-cloud"
          src='/cloud.png'
          ratioX="0.23"
          ratioY="0.41"        
        />
        <Animated 
          className="flying-balloon"
          src='/balloon.png'
          ratioX="0.06"
          ratioY="0.3"        
        />


      </div>


      </header>
    </div>
  );
}

export default App;
