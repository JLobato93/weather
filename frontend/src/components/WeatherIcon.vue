<template>
  <div class="forecast-icon">
    <img :src="weatherIcon" />
  </div>
</template>

<script>
export default {
  name: "WeatherIcon",
  props: ["weatherType"],
  computed: {
    weatherIcon() {
      let iconMap = {
        Clear: "/icons/Sun.svg",
        Rain: "/icons/Rain.svg",
        Snow: "/icons/Snow.svg",
        Clouds: "/icons/Cloud.svg",
        Fog: "/icons/Fog.svg",
        Mist: "/icons/Fog.svg",
      };

      return iconMap[this.weatherType] || iconMap["Clouds"];
    },
  },
};
</script>

<style scoped>
.forecast-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>