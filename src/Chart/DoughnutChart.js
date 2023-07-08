import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
 

export function DoughnutChart(props) {
  const res=props.res

  const [success,setSuccess]=useState()
  const [failure,setFailure]=useState()


  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ['Succesfull Amount', 'Failured Amount'],
    datasets: [
      {
        label: '# for transaction amount',
      
        data: [success, failure],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
         
         
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          
         
        ],
        borderWidth: 1,
      },
    ],
  };
 
  useEffect(()=>{
    setSuccess(res.user.reduce((total, user) => 
    {
      if (user.status === 1) {
        return total + user.amount;
      } else {
        return total;
      }
    }
    ,0));
    setFailure(res.user.reduce((total, user) => {
      if (user.status === 0) {
        return total + user.amount;
      } else {
        return total;
      }
    }, 0));
   },[])
  return (<Card className='mx-3'><Doughnut data={data} /></Card>);
}