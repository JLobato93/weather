import Vue from "vue";

Vue.filter("speed", (value, unit) => {
    if (unit === "celsius") {
        return (value * 3.6).toFixed(2) + " km/h";
    } else {
        return (value * 2.2369).toFixed(2) + " mph";
    }
});
Vue.filter("temperature", (kelvin, unit) => {
    if (unit === "celsius") {
        return Math.round(kelvin - 273.15);
    } else {
        return Math.round((kelvin - 273.15) * 1.8 + 32);
    }
});