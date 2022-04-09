<template>
  <div class="container">
    <SearchBar />
    <div class="spacer"></div>
    <div class="current-weather">
      <div v-if="current.weather" class="current-temp">
        {{ current.temp | temperature(unit) }}
        <span class="degree-symbol">{{ unit.getDegreeSymbol() }}</span>
        <WeatherIcon :weatherType="current.weather[0].main" />
      </div>
      <div class="air-details">
        HUMIDITY <span>{{ current.humidity }}%</span>
      </div>
      <div class="air-details">
        WIND <span>{{ current.wind_speed | km }} km/h</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import WeatherIcon from "@/components/WeatherIcon";
import SearchBar from "@/components/SearchBar";
export default {
  name: "CurrentWeather",
  components: {
    WeatherIcon,
    SearchBar,
  },
  computed: {
    ...mapState(["current", "unit"]),
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.spacer {
  margin-top: 36px;
}
.current-temp {
  font-size: 48px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.degree-symbol {
  font-size: 16px;
  padding-bottom: 18px;
}
.current-weather {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
}
.air-details {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}
</style>