import React, { useState } from 'react';
import home from './images/home.jpg';
import rain from './images/rain.jpg';
import brokenClouds from './images/brokenClouds.jpg';
import scatteredClouds from './images/scatteredClouds.jpg';
import thunderstormClouds from './images/thunderstormClouds.jpg';
import mistClouds from './images/mistClouds.jpg';
import smokyClouds from './images/smokyClouds.jpg';
import hazeClouds from './images/hazeClouds.jpg';
import clearSky from './images/clearSky.jpg';
import './App.css';
import Home from './Home';
import { StateValue } from './StateProvider';

function App() {

  const [{weatherChange}] = StateValue();
  const [weatherImage, setWeatherImage] = useState(home);

  console.log(weatherChange);

  const weatherChanging  = () =>{

    switch(weatherChange){
      case 'scattered clouds':
        setWeatherImage(scatteredClouds);
        clearInterval(interval);
        break;
      case 'broken clouds':
        setWeatherImage(brokenClouds);
        clearInterval(interval);
        break;
      case 'clear sky':
        setWeatherImage(clearSky);
        clearInterval(interval);
        break;
      case 'haze':
        setWeatherImage(hazeClouds);
        clearInterval(interval);
        break;
      case '':
        setWeatherImage(brokenClouds);
        clearInterval(interval);
        break;
      case 'light rain':
        setWeatherImage(rain);
        clearInterval(interval);
        break;
      case 'few clouds':
        setWeatherImage(clearSky);
        clearInterval(interval);
        break;
      case 'smoke':
        setWeatherImage(smokyClouds);
        clearInterval(interval);
        break;
      case 'mist':
        setWeatherImage(mistClouds);
        clearInterval(interval);
        break;
      case 'heavy rain':
        setWeatherImage(thunderstormClouds);
        clearInterval(interval);
        break;
      default:
        setWeatherImage(home);
        clearInterval(interval);
    }
  }

  var interval = setInterval(weatherChanging , 1000); 

  const changeHandler = () =>[
    console.log('changehandler working ....!')
  ]

  return (
    <div className="App" style={{
      background:`url(${weatherImage}) center center/cover no-repeat fixed`
    }}>
      <div style={
        {
          width:'100%',
          display:'flex',
          justifyContent:'center',
          paddingTop:'5px',
          boxShadow:'#524c4c -2px 2px 20px 0px'
      }}>
      <h1 style={
        {
          color:'white',
          fontWeight:'bolder',
        }
      } align="center">
        Weather Forecast
      </h1>
      </div>
      <Home onMouseOver={changeHandler} />
    </div>
  );
}

export default App