import React from "react";
import { Bar } from "react-chartjs-2";
function BarChart({ chartData }) {
  return (
    <div style={{width:500}}>
  <Bar data={chartData} />
  </div>)
}

export default BarChart;
