<template>
  <div class="container">
    <SearchBar/>
    <div class="spacer"></div>
    <div class="current-weather">
      <div v-if="current.weather" class="current-temp">
        {{ current.temp | temperature(unit) }}
        <span class="degree-symbol">{{ unit.getDegreeSymbol() }}</span>
        <WeatherIcon :weatherType="current.weather[0].main"/>
      </div>
      <div class="air-details-grid">
        <div class="air-text">
          <div>HUMIDITY</div>
          <div>WIND</div>
        </div>
        <div class="air-numbers">
          <div>{{ current.humidity }}%</div>
          <div>{{ current.wind_speed | speed(unit) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import WeatherIcon from "@/components/WeatherIcon";
import SearchBar from "@/components/SearchBar";
import "@/utilities/prototype"

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

.air-text {
  font-size: 16px;
  color: hsl(320, 60%, 70%);
  font-weight: 500;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  text-align: left;

}

.air-numbers {
  color: hsl(320, 60%, 90%);
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  text-align: left;
}

.air-details-grid {
  display: grid;
  grid-template-columns: 60px 60px;
  grid-template-rows:  30px;
}
</style>