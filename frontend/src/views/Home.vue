<template>
  <div >
    <MainWeather/>
    <ForecastWeather/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainWeather from '@/components/MainWeather.vue'
import ForecastWeather from '@/components/ForecastWeather.vue'

export default {
  name: 'Home',
  components: {
    MainWeather,
    ForecastWeather,
  }
}
</script>
<style scoped>

</style>