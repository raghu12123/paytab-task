import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';



export function PolarChart(props) {
  const res=props.res

  const [success,setSuccess]=useState()
  const [failure,setFailure]=useState()
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

 const data = {
  labels: ['Master', 'Visa'],
  datasets: [
    {
      label: '# of Card Type',
      data: [success, failure],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

  useEffect(()=>{
    setSuccess(res.user.reduce((total, user) => 
    {
      if (user.card_type === "master") {
        return total + 1;
      } else {
        return total;
      }
    },0));
    setFailure(res.user.reduce((total, user) => {
      if (user.card_type === "visa") {
        return total + 1;
      } else {
        return total;
      }
    }, 0));
   },[])
  return (<Card className='mx-3'><PolarArea data={data} /></Card>);
}
