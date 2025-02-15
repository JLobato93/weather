const axios = require("axios");

const geocode = async function (city) {
    try {
        const { data } = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.API_KEY}`)
        // cod is used for the status code, this is based on the error which is returned from the weathermap api
        if (data.length === 0) return { cod: 404, message: 'City not found' }

        return data
    } catch (error) {
        console.log(error.response.data);

        return error.response.data;
    }
}

const getWeather = async function (lat, lon) {
    try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`)

        if (data.length === 0) return { cod: 404, message: 'Weather data not found' }

        return data
    } catch (error) {
        console.log(error.response.data);

        return error.response.data;
    }
}

module.exports = {
    geocode,
    getWeather
}
