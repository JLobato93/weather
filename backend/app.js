const cors = require('cors')
const express = require('express');
const weatherMap = require('./weatherMapRepo/weather')
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config({})

app.use(cors());

app.get('/', async (req, res) => {
    const city = req.query.city;
    const cityGeoData = await weatherMap.geocode(city);

    if (cityGeoData.cod) return res.status(cityGeoData.cod).json({cod: 404, message: cityGeoData.message});

    const weather = await weatherMap.getWeather(cityGeoData[0].lat, cityGeoData[0].lon);

    return res.send(weather);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})