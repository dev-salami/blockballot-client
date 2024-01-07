// components/BarChart.js
"use client";
// import { Chart } from "chart.js";
import React, { useEffect } from "react";
import Chart from "chart.js/auto";

function BarChart({ dtata }) {
  const chartRef = React.createRef();
  const data = {
    labels: ["Kenny", "Taiye"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)"],
        borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)"],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        plugins: {
          title: {
            display: false,
            // text: "Custom Chart Subtitle",
          },
          subtitle: {
            display: false,
            // text: 'Custom Chart Subtitle'
          },
          legend: {
            display: false,
          },
        },
      },
    });
  }, [data]);

  return <canvas id="45" ref={chartRef} />;
}

export default BarChart;
