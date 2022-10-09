import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS} from "chart.js/auto";

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', ],
    datasets: [
      {
        data: [28, 8, 18,3,14],
        backgroundColor: [
          '#23B3E8',
          '#03293D',
          '#F15832',
          "#826AF9",
          '#4DBD98',
         
        ],
        borderWidth: 0  
      }
    ],
  };
const options = {
  cutout: 60,
    plugins: {
        legend: {
        display: true,
        
          position:"right",
            labels: {
              color: 'black',
             
              
            }
        }
    }
}

function DoughnutBar() {
  return (
      <div className="doughnut">
          <h2>Circle Time</h2>
          <div  style={{width:"300px"}} className="doughnut__container">
        <Doughnut data={data} options={ options } />
          </div>
    </div>
  )
}

export default DoughnutBar