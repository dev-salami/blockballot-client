// components/BarChart.js
"use client";
import { Chart } from "chart.js";
import React, { useEffect } from "react";
// import Chart from "chart.js/auto";

function BarChart({ dtata }) {
  const chartRef = React.createRef();
  const data = {
    labels: ["Poor", "Fair", "Good", "V.Good", "Excellent"],
    datasets: [
      {
        label: ["Poor", "Fair", "Good", "V.Good", "Excellent"],
        data: [6, 8, 9, 3, 2],
        backgroundColor: ["red", "#003366", "blue", "cyan", "green"],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    new Chart(ctx, {
      type: "bar",
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

  return <canvas ref={chartRef} />;
}

export default BarChart;
