import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from '../actions/index';
const WeatherForm = () => {
    const [location, setLocation] = useState('');
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
      setLocation(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(fetchWeatherData(location));
      setLocation('');
    };


    return (
      
        <form className='frm' >
          <input type="text" value={location} onChange={handleChange} placeholder="Enter location" />
          <button type="button" onClick={handleSubmit} >Get Weather</button>
        </form>
        
      );
};
export default WeatherForm;
