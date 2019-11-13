import React, { Component } from 'react';
import './App.css';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
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
                width: "0.1rem",
                height: "100%"
              }}
            />
          }
          itemOne={
            <ReactCompareSliderImage
              src="https://i.pinimg.com/564x/6f/f5/28/6ff528f00d01efc8d5befdda1754e224.jpg"
              style={{ filter: "blur(1px);  background-repeat: no-repeat; background-size: auto " }}
              alt="one"
            />
          }
          itemTwo={

                    <Camera
          idealFacingMode = {FACING_MODES.ENVIRONMENT}
          idealResolution = {{width: 640, height: 480}}
          imageType = {IMAGE_TYPES.JPG}
          imageCompression = {0.97}
          isMaxResolution = {false}
          isImageMirror = {false}
          isSilentMode = {true}
          isDisplayStartCameraError = {true}
          isFullscreen = {true}
          sizeFactor = {1}
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

