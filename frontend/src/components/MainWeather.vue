<template>
  <div class="grid-container">
    <CurrentWeather />
    <TenHourForecast />
    <Chart
      :data="renderChartData(this.chartData, this.chartLabels, this.unit)"
      :labels="this.chartLabels"
      :key="this.current.dt"
    />
    <div class="settings">
      <DegreeToggle />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CurrentWeather from "@/components/CurrentWeather.vue";
import TenHourForecast from "@/components/TenHourForecast.vue";
import DegreeToggle from "@/components/DegreeToggle.vue";
import Chart from "@/components/Chart.vue";
import chart from "@/mixins/chart";
export default {
  name: "MainWeather",
  mixins: [chart],
  components: {
    CurrentWeather,
    TenHourForecast,
    DegreeToggle,
    Chart,
  },
  computed: {
    ...mapState(["chartData", "chartLabels", "current", "unit"]),
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
