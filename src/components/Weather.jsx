import React from 'react';

const Weather = ({ weatherData }) => {

    return (
        <div>
            {weatherData.weather ? (
                <div className='w-[500px] h-[250px] bg-emerald-600 text-white shadow-lg rounded-xl m-auto relative px-6 top-[10%]'>
                    <div className="flex justify-between w-full">
                        <div className='w-1/2 my-4 mx-auto flex justify-between items-center'>
                            <div className="flex flex-col items-start justify-between h-full">
                                <div className=' pt-2'>
                                    <p className='text-4xl font-bold'>
                                        {weatherData.name}, {weatherData.sys.country}
                                    </p>
                                    <p className='text-sm pt-1 capitalize'>
                                        {weatherData.weather[0].description}
                                    </p>
                                </div>
                                <div className='pb-2'>
                                    <h1 className='text-6xl font-semibold'>
                                        {weatherData.main.temp.toFixed()} °C
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 flex flex-col justify-between items-end">
                            <div className='relative w-[85%]'>
                                <img
                                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                                    alt="weathericon"
                                    className='w-[120px]'
                                />
                            </div>
                            {weatherData.name !== undefined ? (
                                <div className='flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs'>
                                    <div className='flex justify-between gap-x-8'>
                                        <p>Feels Like</p>
                                        <p className='font-bold w-20'>
                                            {weatherData.main.feels_like.toFixed()} °C
                                        </p>
                                    </div>
                                    <div className='flex justify-between gap-x-8'>
                                        <p>Humidity</p>
                                        <p className='font-bold w-20'>
                                            {weatherData.main.humidity} %
                                        </p>
                                    </div>
                                    <div className='flex justify-between gap-x-8'>
                                        <p>Wind Speed</p>
                                        <p className='font-bold w-20'>
                                            {weatherData.wind.speed} KPH
                                        </p>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Weather