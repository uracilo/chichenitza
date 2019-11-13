import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactCompareImage from 'react-compare-image';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactCompareImage
          leftImage="https://i.pinimg.com/564x/6f/f5/28/6ff528f00d01efc8d5befdda1754e224.jpg"
          rightImage="https://i.all3dp.com/cdn-cgi/image/fit=cover,w=1284,h=722,gravity=0.5x0.5,format=auto/wp-content/uploads/2018/12/28144052/background-images-can-come-in-handy-when-modeling-tian-ooi-all3dp-181228.jpg"
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


