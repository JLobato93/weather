import Vue from "vue";

Vue.filter("firstThreeLetters", str => { return str.substring(0, 3); });
Vue.filter("uppercase", str => { return str.toUpperCase(); });
Vue.filter("timeUnit", (time, unit) => {
    if (unit === "celsius") {
        return `${time}:00`;
    } else {
        let ampm = time >= 12 ? 'PM' : 'AM';
        time = time % 12;
        time = time ? time : 12; // the hour '0' should be '12'
        return `${time} ${ampm}`;
    }
})