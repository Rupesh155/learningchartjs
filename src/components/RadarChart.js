import React from "react";
import { Radar } from "react-chartjs-2";
function RadarChart({ chartData }) {
  return(
      <div  style={{width:400}}> <Radar data={chartData} /></div> )
}

export default RadarChart;
