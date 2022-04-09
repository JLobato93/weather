import dataConverter from "@/utilities/dataConverter";
export default {
    methods: {
        renderChartData(temperature, labels, unit) {
            return {
                type: "line",
                data: {
                    labels,
                    datasets: [
                        {
                            data: dataConverter.transformChartTemp(temperature, unit),
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
                }
            }
        }
    }
}