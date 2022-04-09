import Vue from "vue";

Vue.filter("km", ms => { return Math.round(ms * 3.6); });
Vue.filter("temperature", (kelvin, unit) => {
    if (unit === "celsius") {
        return Math.round(kelvin - 273.15);
    } else if (unit === "fahrenheit") {
        return Math.round((kelvin - 273.15) * 1.8 + 32);
    }
});