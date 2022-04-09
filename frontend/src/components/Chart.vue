<template>
  <div class="chart-container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "Chart",
  props: ["data", "labels"],
  mounted() {
    const ctx = this.$refs.canvas;
    new Chart(ctx, this.data);
  },
};
</script>

<style scoped>
.chart-container {
  position: absolute;
  width: 100%;
  z-index: 1;
  bottom: 0;
}
</style>