import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"",
        feelsLike:0,
        temp:0,
        tempMin:0,
        tempMax:0,
        humidity:0,
        weather:"undefined"
    })
    let  updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <>
        <h2>Wearther App by Me</h2>
        <SearchBox updateInfo={updateInfo}></SearchBox>
        <br></br>
        <InfoBox info={weatherInfo}></InfoBox>
        </>
    );
}