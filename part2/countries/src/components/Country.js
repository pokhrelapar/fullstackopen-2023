import { useState, useEffect } from "react"
import weatherService from "../services/weatherService";

const Country = ({ country, showDetails, toggleDetails}) => {

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const weatherData = await weatherService.getWeatherByCapital(country.capital[0])
      setWeather(weatherData)
    }

    if(showDetails && country.capital[0] && !weather) {
      fetchWeather()
    }
  }, [country.capital, showDetails, weather]);




  return (
	<div className="card">
		<h2 className="person-name">{country.name.common} </h2>	
		{showDetails ? (
        <div>
          <p>Capital: {country.capital[0]}</p>
          <p>Area: {country.area} km²</p>
          <strong>Languages</strong>
          <ul>
            {Object.values(country.languages).map((language) => (
              <li key={country.ccn3}>{language}</li>
            ))}
          </ul>

          {weather && (
            <div>
              <p>Weather in <strong>{country.capital[0]}</strong></p>
              <p> Description:  {weather.description} </p>
              <img src={weather.iconImg} alt="Weather Icon" />
              <p> Temperature:  {weather.temp} </p>
              <p> Wind speed:  {weather.windSpeed} </p>
            </div>
          )}
		  <div className="flags">         
		   	<img className="flag" src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
		  </div>
        </div>
      ) : (
        <div>
           <p>{country.cioc}</p> 
           {!showDetails && <button className="details-btn" onClick={()=> toggleDetails(country)}>Show Info</button>}
        </div>
       
      )}
	</div>
  )
}

export default Country

