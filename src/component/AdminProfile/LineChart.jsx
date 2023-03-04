import React, { useEffect } from 'react';
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';


function LineChart({chartData}) {
  useEffect(() => {
    console.log(chartData)
  }, [])
  return <Line data={chartData} options={{ maintainAspectRatio: false }}  width={"750%"} height={"100%"}/>;
}

export default LineChart;