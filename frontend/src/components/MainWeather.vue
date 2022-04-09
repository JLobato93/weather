<template>
  <div class="grid-container">
    <CurrentWeather />
    <TenHourForecast />
    <div class="settings">
      <DegreeToggle />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CurrentWeather from "@/components/CurrentWeather.vue";
import TenHourForecast from "@/components/HourlyForecast.vue";
import DegreeToggle from "@/components/DegreeToggle.vue";
export default {
  name: "MainWeather",
  components: {
    CurrentWeather,
    TenHourForecast,
    DegreeToggle,
  },

  methods: {
    ...mapActions(["getWeather"]),
  },
  created() {
    this.getWeather();
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  position: relative;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 460px;
  grid-auto-flow: column;
  width: fit-content;
  margin: 0 auto;
  background: linear-gradient(
    to top right,
    hsl(320, 100%, 39%),
    hsl(330, 100%, 39%)
  );
  border-radius: 16px 16px 0 0;
}
.settings {
  display: flex;
  position: absolute;
  left: 68px;
  bottom: 20px;
}
</style>
