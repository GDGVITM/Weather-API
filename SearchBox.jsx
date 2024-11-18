import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

export default function SearchBox({updateInfo}) {
    const [city, setCity] = useState("");
    const [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="3fc3106b2bb7bdef8c6784f8fba92a64";

    let getWeatherInfo= async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            
            if(!response.ok)
            {
                throw new Error(jsonResponse.message || "Error fetching weather data");
            }
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
        }
        catch(err){
            throw err;
        }
        
    };
    const handleChange = (event) => {
        setCity(event.target.value); 
    };

    const handleSubmit = async (event) => {
        try{
        event.preventDefault();
        let newInfo= await getWeatherInfo();
        updateInfo(newInfo);
        setCity(""); 
        }
        catch (err){
            setError(true);
        }
        
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    onChange={handleChange}
                    value={city}
                    id="city"
                    label="City-Name"
                    variant="filled"
                    required
                />
                <br />
                <br />
                <Button
                    variant="contained"
                    type="submit"
                    endIcon={<SearchIcon />}
                >
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No such place exist</p>}
            </form>
        </>
    );
}
