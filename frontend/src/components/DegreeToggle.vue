<template>
  <div>
    <div class="symbol">°C</div>
    <label class="switch">
      <input type="checkbox" @click="setDegreeUnit" />
      <span class="slider round"></span>
    </label>
    <div class="symbol">°F</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "DegreeToggle",
  methods: {
    ...mapMutations(["setDegreeUnit"]),
  },
};
</script>

<style scoped>
.symbol {
  display: inline-flex;
  padding: 0 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
}
.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsl(320, 100%, 20%);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 1px;
  bottom: 1px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: hsl(320, 100%, 20%);
}

input:focus + .slider {
  box-shadow: 0 0 1px hsl(320, 100%, 20%);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>