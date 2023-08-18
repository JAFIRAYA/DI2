import axios from 'axios';

const WeatherAPI = {
  apiKey: 'kS5OLcPB3v47TAcvvIoKlnO5ZhbqDgGf',
  baseUrl: 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete',

  async getWeatherData(city) {
    try {
      const url = `${this.baseUrl}?apikey=${this.apiKey}&q=${city}&days=5`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('City not found!');
    }
  },
};

export default WeatherAPI;
