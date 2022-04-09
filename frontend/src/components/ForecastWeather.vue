<template>
  <div class="container">
    <div v-for="day in daily" :key="day.dt">
      <div class="daily-forecast">
        <WeatherIcon :weatherType="day.weather[0].main" />
        <div class="forecast-temp">
          <div class="forecast-temp-max">
            {{ day.temp.max | temperature(unit) }}
            <span class="degree-symbol">
              {{ unit.getDegreeSymbol() }}
            </span>
          </div>

          <div class="forecast-temp-min">
            {{ day.temp.min | temperature(unit) }}
            <span class="degree-symbol">
              {{ unit.getDegreeSymbol() }}
            </span>
          </div>
        </div>
        <div class="forecast-day">
          {{ getDayOfWeek(getDate(day.dt)) | firstThreeLetters | uppercase }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import time from "@/mixins/time";
import WeatherIcon from "@/components/WeatherIcon";
export default {
  name: "ForecastWeather",
  mixins: [time],
  components: {
    WeatherIcon,
  },
  computed: {
    ...mapState(["daily", "unit"]),
  },
};
</script>
<style scoped>
.container {
  width: fit-content;
  height: 200px;
  background-color: hsl(0, 0%, 10%);
  display: flex;
  justify-content: center;
  border-radius: 5px 5px 0 0;
  padding: 0 36px;
  box-shadow: 5px 5px 10px hsla(0, 0%, 20%, 0.6);
}
.daily-forecast {
  display: grid;
  grid-template-columns: 186px;
}

.forecast-temp {
  font-size: 28px;
  align-self: center;
}
.forecast-day {
  align-self: end;
  padding: 10px 0;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
}

.forecast-temp-max {
  margin-right: 10px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  margin-right: 20px;
}
.forecast-temp-min {
  color: rgba(255, 255, 255, 0.5);
}

.forecast-temp {
  display: inline-flex;
  justify-content: center;
  position: relative;
}

.degree-symbol {
  font-size: 12px;
  position: absolute;
  top: 6px;
}
</style>