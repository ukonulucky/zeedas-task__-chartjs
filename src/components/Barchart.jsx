import React from 'react';
import {Chart as ChartJS,} from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
const userDataCoding = [150, 50, 50]
const userDataCodingReview = [50, 120, 150]

const options = {
  scales: {
    x: {
      grid: {
        display: false

      }
    },
    y: {
     display: false
    }
  },
  responsive: true,
  plugins: {
    legend: {
      display:false
      
    }
  },
};

const labels = ["Coding", "Coding Review", "QA Review"];

const data = {
  labels,
  datasets: [
    {
      data: userDataCoding,
      backgroundColor: "#E5E9EB",
    },
    {
      label: 'Dataset 2',
      data: userDataCodingReview,
      backgroundColor: '#4DBD98',
    },
  
  ],
};

function Barchart() {
  return <div className="barchart" style={{
    height:"300px",
    width:"400px"
  }}>
    <Bar options={options} data={data} />
  </div>;
}

export default Barchart