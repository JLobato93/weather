import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import helper from '@/utilities/helper'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current: {},
    hourly: {},
    daily: {},
    unit: 'celsius',
    city: "Almere",
    chartData: [],
    chartLabels: [],
  },
  mutations: {
    setCurrent(state, payload) { state.current = payload },
    setHourly(state, payload) { state.hourly = helper.threeHourForecast(payload) },
    setDaily(state, payload) { state.daily = payload.splice(1, 6) },
    setDegreeUnit(state) { state.unit = state.unit === 'celsius' ? 'fahrenheit' : 'celsius' },
    setCity(state, payload) { state.city = payload.capitalize() },
    setChartData(state, payload) {
      state.chartData = helper.extractProperty(helper.threeHourForecast(payload), 'temp', 6)
      state.chartLabels = helper.extractProperty(helper.threeHourForecast(payload), 'dt', 6)
    },
  },
  actions: {
    async getWeather({ commit }) {
      await axios.get(`http://localhost:3000?city=${this.state.city}`).then(({ data }) => {

        if (data.cod) return helper.alertNotification(data.message, data.cod)

        commit('setCurrent', data.current);
        commit('setHourly', data.hourly);
        commit('setDaily', data.daily);
        commit('setChartData', data.hourly);
      });
    },
  }
})
