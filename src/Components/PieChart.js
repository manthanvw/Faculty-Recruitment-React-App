import React from 'react'
import {Pie} from "react-chartjs-2";
import {Chart as ChartsJS} from 'chart.js/auto'

export default function PieChart() {
    const userData= 
    {
        labels: ['Viewed', 'Pending', 'Rejected'],
        datasets: [{
            label: 'Number of Applications',
            data: [12, 19, 3],
            backgroundColor: [
                "green",
                "yellow",
                "red"
            ],
            borderColor: [
                "#000000",
                "#000000",
            "#000000",
            
        ],
            borderWidth: 1
        }]
    }
    const userOptions=
    {
        responsive: true,
        maintainAspectRatio: false
    }
  return (
      
        <Pie data={userData} options={userOptions}/>
   
  )
}
