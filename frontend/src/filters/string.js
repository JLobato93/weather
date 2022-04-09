import Vue from "vue";

Vue.filter("firstThreeLetters", str => { return str.substring(0, 3); });
Vue.filter("uppercase", str => { return str.toUpperCase(); });
Vue.filter("degreeSymbol", unit => {
    if (unit === "celsius") {
        return "°C";
    } else if (unit === "fahrenheit") {
        return "°F";
    }
});
Vue.filter("timeUnit", hour => {
    if (hour >= 12) {
        return `${hour - 12} PM`;
    } else {
        return `${hour} AM`;
    }
});