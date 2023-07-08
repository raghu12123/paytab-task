import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export function VerticalChart(props) {
  const res=props.res

  const [may,setMay]=useState()
  const [june,setJune]=useState()
  const [july,setJuly]=useState()
  const [mayFail,setMayFail]=useState()
  const [juneFail,setJuneFail]=useState()
  const [julyFail,setJulyFail]=useState()
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = [ 'May', 'June', 'July'];
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [may,june,july],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [mayFail,juneFail,julyFail],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  useEffect(()=>{
    setMay(res.user.reduce((total, user) => 
    {
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
    setMayFail(res.user.reduce((total, user) => 
    {
      if (user.month==="may"&&user.status===1) {
        return total + user.amount;
      } else {
        return total;
      }
    }
    ,0));
    setJuneFail(res.user.reduce((total, user) => {
      if (user.month==="june"&&user.status===0) {
        return total + user.amount;
      } else {
        return total;
      }
    }, 0));
    setJulyFail(res.user.reduce((total, user) => {
      if (user.month==="july"&&user.status===0) {
        return total + user.amount;
      } else {
        return total;
      }
    }, 0));
  
   },[])  
  return (<Card className='mx-3'><Bar options={options} data={data} /></Card>);
}
