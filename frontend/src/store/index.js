import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import dataConverter from '@/utilities/dataConverter'
import notification from "@/utilities/notification";

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
        loading: true,
    },
    mutations: {
        setCurrent(state, payload) {
            state.current = payload
        },
        setHourly(state, payload) {
            state.hourly = dataConverter.threeHourForecast(payload, 6)
        },
        setDaily(state, payload) {
            state.daily = payload.splice(1, 6)
        },
        setDegreeUnit(state) {
            state.unit = state.unit === 'celsius' ? 'fahrenheit' : 'celsius'
        },
        setCity(state, payload) {
            state.city = payload.capitalize()
        },
        setChartData(state, payload) {
            state.chartData = dataConverter.extractProperty(dataConverter.threeHourForecast(payload, 6), 'temp', 6)
            state.chartLabels = dataConverter.extractProperty(dataConverter.threeHourForecast(payload, 6), 'dt', 6)
        },
        setLoading(state, payload) {
            state.loading = payload
        }
    },
    actions: {
        async getWeather({commit}) {
            commit('setLoading', true)
            await axios.get(`${process.env.VUE_APP_API_URL}?city=${this.state.city}`).then(({data}) => {
                commit('setCurrent', data.current);
                commit('setHourly', data.hourly);
                commit('setDaily', data.daily);
                commit('setChartData', data.hourly);
                commit('setLoading', false)
            }).catch(({response}) => {
                return notification.alert(response.data.message, response.data.cod)
            })
        },
    }
})
