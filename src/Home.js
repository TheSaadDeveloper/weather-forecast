import React, { useEffect, useState } from 'react';
import './Home.css';
import styled from 'styled-components';
import { fetchWeather } from './wheather-api/fetchWeather';
import {StateValue} from './StateProvider';

function Home() {

    const Box = styled.div`
    /* transition:all 1s ease-in-out; */
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    min-width:310px;
    max-width: 900px;
    min-height: 310px;
    padding:10px 10px;
    margin-bottom:200px;
    border-radius: 10px;
    box-shadow: 8px 1px 150px 0px #868282 inset;
    backdrop-filter: blur(5px);
    `;

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const [{weatherChange} ,dispatch] = StateValue();

    useEffect(() => {
        if(weather.main){
            dispatch(
                {
                    type:"WEATHER_CHANGE",
                    weatherChange:weather.weather[0].description
                }
            )
        }
    }, [weather])

    const searchWheather = async(e) =>{
        if(e.key === 'Enter'){
        e.preventDefault();
        const data = await fetchWeather(query);
        setWeather(data);
        setQuery('');
    }}

    return (
        <div className='home'>
            <div>
                <input className='weather__input' placeholder='City | Country | State ' type='text' onChange={e => setQuery(e.target.value)} onKeyPress={searchWheather} />                
            </div>
            {weather?.main && (
                <Box>
                    <div className='weather__name'>
                        <span className='weather__cityName'>{weather?.name}</span>
                        <span className='weather__countryName'>{weather.sys.country}</span>
                    </div>
                    <div className='weather__seperation'>
                        <div className='weather__tempSeperation'>
                            <div style={{color:'#f7f1f1'}}>
                                <span className='weather__temp'>{Math.round(weather.main.temp)}</span>
                                <span style={{fontSize:'1.3rem',marginTop:'35px'}}>
                                <span style={{fontSize:'1rem'}}>o</span>  C</span>
                            </div>
                                <span style={{color:'white',fontSize:'1.5rem'}}>{weather.weather[0].description}</span>
                        </div>
                    <div className='weather__info'>
                        <img className='weather__img' alt='please make sure your internet connectivity is good !' src = {`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                    </div>
                    </div>
                </Box>
            )}
        </div>
    )
}

export default Home
