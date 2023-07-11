import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

export function AreaChart(props) {
  const res=props.res
 
  const [may,setMay]=useState()
  const [june,setJune]=useState()
  const [july,setJuly]=useState()
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthy Revanue',
      },
    },
  };
  
  const labels = [ 'May', 'June', 'July'];
   const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Amount',
        data: [may,june,july],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  useEffect(()=>{
    setMay(res.user.reduce((total, user) => {
    if (user.month==="may"&&user.status===1) {
      return total + user.amount;
    } else {
      return total;
    }
  }
    ,0));
    setJune(res.user.reduce((total, user) => {
      if (user.month==="june"&&user.status===1) {
        return total + user.amount;
      } else {
        return total;
      }
    }, 0));
    setJuly(res.user.reduce((total, user) => {
      if (user.month==="july"&&user.status===1) {
        return total + user.amount;
      } else {
        return total;
      }
    }, 0));
  
   },[])  
  return (<Card className='mx-3'>
    <Line options={options} data={data} />
  </Card>);
}
