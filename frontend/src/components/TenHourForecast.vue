<template>
  <div class="container">
    <div class="hourly-forecast" v-for="hour in hourly" :key="hour.dt">
      <div class="forecast-degree">
        {{ hour.temp | temperature(unit) }}
        <span class="forecast-symbol">
          {{ unit.getDegreeSymbol() }}
        </span>
      </div>
      <div class="forecast-hour">
        {{ getDate(hour.dt).getHours() | timeUnit }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import time from "@/mixins/time";
export default {
  name: "TenHourForecast",
  components: {},
  mixins: [time],
  computed: {
    ...mapState(["hourly", "unit"]),
  },
};
</script>

<style scoped>
.container {
  display: flex;
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
  text-align: top;
  position: absolute;
  top: 6px;
}
.hourly-forecast:nth-child(2n + 1) {
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