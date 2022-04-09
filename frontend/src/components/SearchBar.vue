<template>
  <div class="search-bar">
    <input
      type="text"
      ref="search-input"
      :value="city"
      @keyup.enter="keyPress()"
    />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "SearchBar",
  methods: {
    ...mapActions(["getWeather"]),
    ...mapMutations(["setCity"]),
    keyPress() {
      const searchValue = this.$refs['search-input'].value;
      this.setCity(searchValue);
      this.getWeather();
    },
  },
  computed: {
    ...mapState(["city"]),
  },
};
</script>

<style scoped>
.search-bar {
  width: 240px;
  background: hsla(320, 20%, 80%, 0.3);
  display: flex;
  align-items: center;
  border-radius: 4px;
  color: white;
}

.search-bar input {
  background: transparent;
  border: none;
  outline: none;
  padding: 16px 0;
  font-size: 28px;
  color: white;
  width: 240px;
  text-align: center;
}
</style>