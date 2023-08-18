import React from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherForecast from './components/WeatherForecast';
import './App.css'


const App = () => {
  return (
    <div>
      
      <WeatherForm />
      <WeatherForecast />
     
      
    </div>
  );
};

export default App;