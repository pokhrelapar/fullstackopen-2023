import axios from 'axios'


const apiKey = process.env.REACT_API_KEY

const  getWeatherByCapital = async(capitalCity) => {

    try {

        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capitalCity}&appid=${apiKey}`)

        if(weatherResponse.status===200) {
            //main = temp    wind.speed    weather.description   weather.icon
            const weatherData = weatherResponse.data
            console.log(weatherData)
            const temp = weatherData.main.temp
            const windSpeed = weatherData.wind.speed
            const description = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const iconImg = `https://openweathermap.org/img/wn/${icon}@2x.png`


            return {temp,windSpeed,description,iconImg}
        } else {
            throw new Error('Error when fetching weather data')
        }
        
    } catch (error) {
         throw new Error(error.message)
    }
    
}

const weatherService = {getWeatherByCapital}

console.log(weatherService)

export default weatherService