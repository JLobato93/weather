<template>
  <div class="container">
    <Chart
        :data="renderChartData(this.chartData, this.chartLabels, this.unit)"
        :key="this.current.dt + this.unit"
    />
    <div class="hourly-forecast" v-for="hour in hourly" :key="hour.dt">
      <div class="forecast-degree">
        {{ hour.temp | temperature(unit) }}
        <span class="forecast-symbol">
          {{ unit.getDegreeSymbol() }}
        </span>
      </div>
      <div class="forecast-hour">
        {{ getDate(hour.dt).getHours() | timeUnit(unit) }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import time from "@/mixins/time";
import Chart from "@/components/Chart"
import chart from "@/mixins/chart";

export default {
  name: "TenHourForecast",
  components: {
    Chart,
  },
  mixins: [time,chart],
  computed: {
    ...mapState(["hourly", "unit", "chartData", "chartLabels", "current",])
  },
};
</script>

<style scoped>
.container {
  display: flex;
  position: relative;
}
.hourly-forecast {
  display: grid;
  grid-template-columns: 128px;
  font-size: 20px;
  height: 100%;
  z-index: 10;
}
.forecast-degree {
  align-self: end;
  position: relative;
  font-size: 28px;
  color: rgba(255, 255, 255, 0.9);
}
.forecast-symbol {
  font-size: 12px;
  position: absolute;
  top: 6px;
}
.hourly-forecast:nth-child(even) {
  box-shadow: 0 4px 30px hsla(337, 79%, 20%, 0.6);
  backdrop-filter: blur(0.9px);
  -webkit-backdrop-filter: blur(0.9px);
}
.hourly-forecast:last-child {
  border-top-right-radius: 16px;
}

.forecast-hour {
  align-self: end;
  padding-bottom: 20px;
  color: hsl(330, 45%, 78%);
  font-weight: 500;
}
</style>