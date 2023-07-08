import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';



export function PieChart(props) {
  const res=props.res

  const [success,setSuccess]=useState()
  const [failure,setFailure]=useState()
  ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Success Count', 'Failure Count'],
  datasets: [
    {
      label: '# of Succes and failure Count',
      data: [success, failure],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      
      ],
      borderWidth: 1,
    },
  ],
};

  useEffect(()=>{
    setSuccess(res.user.reduce((total, user) =>{
    if (user.status === 1) {
      return total + 1;
    } else {
      return total;
    }
  }
    ,0));
    setFailure(res.user.reduce((total, user) => {
      if (user.status === 0) {
        return total + 1;
      } else {
        return total;
      }
    }, 0));
   },[])
  return (<Card className='mx-3'><Pie data={data} /></Card>);
}