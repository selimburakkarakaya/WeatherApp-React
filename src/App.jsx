import { useState } from 'react';
import './app.css'
import axios from 'axios';
import Weather from './components/Weather';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = "3f34d5a14fc8d70dee50de93206eff90";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        // console.log(response.data);
      });
      setLocation("");
    }
  }

  return (
    <div className='w-full h-full relative'>
      <div className='text-center p-4'>
        <input
          type="text"
          className='py-3 px-6 w-[400px] text-lg rounded-3xl border border-gray-200 text-gray-600 focus:outline-none bg-white-600/100 shadow-md placeholder:text-gray-400'
          placeholder='Enter location'
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDownCapture={searchLocation}
        />
      </div>

      <Weather weatherData={data} />
    </div>
  )
}

export default App
