import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryInfo = ({ country }) => {
    //获取天气
    const [weather, setWeather] = useState()
    useEffect(() => {
        axios
            .get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    lat: country.latlng[0],
                    lon: country.latlng[1],
                    appid: process.env.REACT_APP_API_KEY
                }
            })
            .then(response => {
                setWeather(response.data)
                // icon_weather = "http://openweathermap.org/img/wn/"+{weather.weather[0].icon}+".png"
            })
        // axios
        //     .get(`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`)
        //     .then(response => {
        //         console.log('response.data', response.data)
        //          icon_weather = response.data
        //     })

    }, [])
    const temp = (weather.main.feels_like)

    //遍历语言
    let languages = []
    for (let language in country.languages) {
        languages = languages.concat(country.languages[language])
    }

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>{country.area}</p>
            <h4>languages:</h4>
            <ul>
                {languages.map(language => {
                    return <li key={language}>{language}</li>
                })}
            </ul>
            <img src={country.flags.png} alt="flags"></img>
            <h2>Weather in {country.name.common}</h2>
                <p>temperature {temp} Celcius</p>
                {/* <img src={``}></img> */}
                <p>wind {weather.wind.speed} m/s</p>
        </div>
    )
}

export default CountryInfo