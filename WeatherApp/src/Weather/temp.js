import React, { useEffect, useState } from 'react'
import './temp.css'
import Weathercard from './weathercard'
// https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=334bcfc457cd2a2f7921b5c4e4e061b4

const Temp = () => {
    const [searchValue, setSearchValue] = useState("Sojat")
    const [tempInfo, setTempInfo] = useState({})

    const getWeatherInfo = async() =>{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=334bcfc457cd2a2f7921b5c4e4e061b4`

            const res = await fetch(url);
            const data = await res.json();

            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind
            const { country, sunset } = data.sys
            // console.log(temp);
            // console.log(data);

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            }

            setTempInfo(myNewWeatherInfo)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
        getWeatherInfo()
    },[])

  return (
    <>
      <div className='wrap'>
        <div className='search'>
            <input type='search' 
            autoFocus id='search' 
            className='searchTerm' 
            value={searchValue} 
            onChange={(e) =>{setSearchValue(e.target.value)}}/>
            <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
        </div>
      </div>
      
        {/* our temp card */}
        <Weathercard tempInfo ={tempInfo} />
    </>
  )
}

export default Temp
