<template>
  <div>
    <Loading class="center" v-if="loading"></Loading>
    <div v-show="!loading">
      <MainWeather/>
      <ForecastWeather/>
    </div>
  </div>
</template>

<script>
import MainWeather from '@/components/MainWeather.vue'
import ForecastWeather from '@/components/ForecastWeather.vue'
import Loading from "@/components/Loading.vue";
import {mapState} from "vuex";

export default {
  name: 'Home',
  components: {
    Loading,
    MainWeather,
    ForecastWeather,
  },
  computed: {
   ...mapState(['loading'])
  }
}
</script>
<style scoped>
.center{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
