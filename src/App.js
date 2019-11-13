import React, { Component } from 'react';
import './App.css';
import Camera from 'react-html5-camera-photo';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';




class App extends Component {
  onTakePhoto (dataUri) {
    console.log('takePhoto');
  }
 
  render () {
    return (
      <div className="App">
      

    <div style={{display: "flex",  width: "100%",  height: "100vh", overflow: "hidden" }}  >
        <ReactCompareSlider
          style={{ display: "flex" }}
          handle={
            <div
              style={{
                backgroundImage: "linear-gradient(to top,  white, blue)",
                width: "0.5rem",
                height: "100%"
              }}
            />
          }
          itemOne={
            <ReactCompareSliderImage
              src="https://i.pinimg.com/564x/6f/f5/28/6ff528f00d01efc8d5befdda1754e224.jpg"
              style={{ filter: "blur(5px)" }}
              alt="one"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="https://i.pinimg.com/564x/6f/f5/28/6ff528f00d01efc8d5befdda1754e224.jpg"
              alt="two"
            />
          }
          onChange={position => console.log(`Landscape position: ${position}`)}
        />
      </div>

      </div>
    );
  }
}
 
export default App;

