# Backend
The backend is based on Node.js and currently has one main route.
This route uses the geocode api from openweathermap to get the latitude and longitude. 
With the lat and lon the onecall api from openweathermap is usedto get the weather and the forecast of the searched location.

## Project setup
```
npm install
```

### Environment variables
Create a .env file in the root folder with the api key from openweathermap and with a port:

`API_KEY = <enter api key>`
`PORT = 3000`

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles for production
```
npm run start
```
