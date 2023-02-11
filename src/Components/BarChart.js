import React from 'react'
import {Bar} from "react-chartjs-2";
import {Chart as ChartsJS} from 'chart.js/auto'

export default function BarChart() {
  const userData=
    {
      labels: ['CSE', 'CSM', 'CSD', 'IT'],
      datasets: [{
        label: 'Number of Vacancies',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
    }
    const userOptions = 
    {
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
              }
        }]
    }
    }
  return (
    <div>
      <Bar data={userData} options={userOptions}/>
    </div>
  )
}


// import { useState } from 'react/cjs/react.production.min'