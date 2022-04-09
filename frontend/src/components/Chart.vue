<template>
  <div class="chart-container">
    <canvas ref="canvas" id="chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  name: "Chart",
  props: ["data", "labels"],
  data() {
    return {
      chartData: {
        type: "line",
        data: {
          labels: this.labels,
          datasets: [
            {
              data: this.data,
              backgroundColor: ["hsla(320, 100%, 20%, 0.5)"],
              borderColor: ["hsla(320, 100%, 20%, 0.5)"],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          elements: {
            point: {
              radius: 0,
            },
          },
          scales: {
            xAxes: [
              {
                display: false,
              },
            ],
            yAxes: [
              {
                display: false,
                ticks: {
                    beginAtZero: true,
                  stepSize: 3,
                },
              },
            ],
          },
        },
      },
    };
  },
  mounted() {
    const ctx = document.getElementById("chart");
    new Chart(ctx, this.data);
  },
};
</script>

<style scoped>
.chart-container {
  position: absolute;
  width: 768px;
  height:256px;
  z-index: 1;
  left: 300px;
  bottom: 0;
}
#chart {
  position: absolute;
}
</style>