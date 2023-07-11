import React, { useEffect, useState } from 'react'

import {
  CAvatar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetStatsF
} from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import {
  cilSettings,
  cilMoon,
  cilBell,
  cilPeople,
  cilUser,
  cibCcMastercard,
  cibCcVisa,
  cilReportSlash,
  cilBank,
} from '@coreui/icons'

import avatar1 from '../../assets/images/avatars/1.jpg'
import avatar2 from '../../assets/images/avatars/2.jpg'
import avatar3 from '../../assets/images/avatars/3.jpg'
import avatar4 from '../../assets/images/avatars/4.jpg'
import avatar5 from '../../assets/images/avatars/5.jpg'
import avatar6 from '../../assets/images/avatars/6.jpg'


const Dashboard = () => {
  const user =
    [
     {
         "txn_id":"#123Ae",
         "avatar":avatar1,
         "terminal_id":"#12367",
         "device_":"anr_1",
     "name":"John",
     "payment_method":"card",
     "card_type":"visa",
     "curenccy":"INR",
     "amount":1000,
     "date":"07/05/23",
     "time":"08:52:11",
     "end_time":"08:52:19",

     "month":"may",
     "card_number":"1234 5678 9012",
     "status":0
    },
    {
      "txn_id":"#124Br",
      "terminal_id":"#12368",
      "device_":"anr_1",
      "avatar":avatar2,

  "name":"Sam",
  "payment_method":"card",
  "card_type":"master",
  "curenccy":"INR",
  "amount":1000,
  "date":"07/05/23",
  "time":"15:17:47",
  "end_time":"15:18:54",
  "month":"may",
  "card_number":"1234 5678 9018",
  "status":1
 },
    
    {
     "txn_id":"#125Th",
     "avatar":avatar3,
     "terminal_id":"#12369",
     "device_":"anr_2",
     "name":"Mitchel",
    "payment_method":"card",
    "card_type":"visa",
    "curenccy":"INR",
    "amount":1300,
    "date":"07/06/23",
    "month":"june",
    "time":"20:34:51",
    "end_time":"20:34:58",
    "card_number":"1234 5678 9013",
    "status":1
  
   },
   {
    "txn_id":"#127Uo",
    "avatar":avatar4,
    "terminal_id":"#12360",
    "device_":"anr_2",
"name":"Marsh",
"payment_method":"card",
"card_type":"visa",
"curenccy":"INR",
"amount":1222,
"date":"07/06/23",
"time":"23:04:59",
"end_time":"23:05:09",

"month":"june",
"card_number":"1234 5678 9112",
"status":0
},
{
  "txn_id":"#128Nl",
  "terminal_id":"#12361",
  "device_":"anr_2",
  "avatar":avatar5,

"name":"Steve",
"payment_method":"card",
"card_type":"master",
"curenccy":"INR",
"amount":1222,
"date":"07/07/23",
"time":"10:33:21",
"end_time":"10:33:31",

"month":"july",
"card_number":"1234 5678 8012",
"status":1
},
{
  "txn_id":"#129Ck",
  "terminal_id":"#12362",
  "avatar":avatar6,
  "device_":"anr_1",
"name":"Harry",
"payment_method":"card",
"card_type":"visa",
"curenccy":"INR",
"amount":1000,
"date":"07/07/23",
"time":"21:44:01",
"end_time":"21:45:09",

"month":"july",
"card_number":"1234 5678 9912",
"status":0
},
  ]
  
  const [received,setReceived]=useState()
  const [master,setMaster]=useState()
  const [visa,setVisa]=useState()
  const [failed,setFailed]=useState() 
  const [may,setMay]=useState()
  const [june,setJune]=useState()
  const [july,setJuly]=useState()
  const [success,setSuccess]=useState()
  const [failure,setFailure]=useState()
  const [pieSuccess,setPieSuccess]=useState()
  const [pieFailure,setPieFailure]=useState()
  const [polarSuccess,setPolarSuccess]=useState()
  const [polarFailure,setPolarFailure]=useState()
  const [mayLine,setMayLine]=useState()
  const [juneLine,setJuneLine]=useState()
  const [julyLine,setJulyLine]=useState()
  const [mayFail,setMayFail]=useState()
  const [juneFail,setJuneFail]=useState()
  const [julyFail,setJulyFail]=useState()
useEffect(()=>{
  setReceived(user.reduce((total, user) =>{
    if (user.status === 1) {
      return total + user.amount;
    } else {
      return total;
    }
  },0))

  setMaster(user.reduce((total, user) =>{
    if (user.status === 1 &&user.card_type==="master") {
      return total + user.amount;
    } else {
      return total;
    }
  },0))

  setVisa(user.reduce((total, user) =>{
    if (user.status === 1 &&user.card_type==="visa") {
      return total + user.amount;
    } else {
      return total;
    }
  },0))

  setFailed(user.reduce((total, user) =>{
    if (user.status === 0 ) {
      return total + user.amount;
    } else {
      return total;
    }
  },0))
  setMay(user.reduce((total, user) => {
    if (user.month==="may"&&user.status===1) {
      return total + user.amount;
    } else {
      return total;
    }
  }
    ,0));
    setJune(user.reduce((total, user) => {
      if (user.month==="june"&&user.status===1) {
        return total + user.amount;
      } else {
        return total;
      }
    }, 0));
    setJuly(user.reduce((total, user) => {
      if (user.month==="july"&&user.status===1) {
        return total + user.amount;
      } else {
        return total;
      }
    }, 0));
    setSuccess(user.reduce((total, user) => 
    {
      if (user.status === 1) {
        return total + user.amount;
      } else {
        return total;
      }
    }
    ,0));
    setFailure(user.reduce((total, user) => {
      if (user.status === 0) {
        return total + user.amount;
      } else {
        return total;
      }
    }, 0));
    setPieSuccess(user.reduce((total, user) =>{
      if (user.status === 1) {
        return total + 1;
      } else {
        return total;
      }
    }
      ,0));
      setPieFailure(user.reduce((total, user) => {
        if (user.status === 0) {
          return total + 1;
        } else {
          return total;
        }
      }, 0));

      setPolarSuccess(user.reduce((total, user) => 
      {
        if (user.card_type === "master") {
          return total + 1;
        } else {
          return total;
        }
      },0));
      setPolarFailure(user.reduce((total, user) => {
        if (user.card_type === "visa") {
          return total + 1;
        } else {
          return total;
        }
      }, 0));
      setMayLine(user.reduce((total, user) => 
      {
        if (user.month==="may"&&user.status===1) {
          return total + user.amount;
        } else {
          return total;
        }
      }
      ,0));
      setJuneLine(user.reduce((total, user) => {
        if (user.month==="june"&&user.status===1) {
          return total + user.amount;
        } else {
          return total;
        }
      }, 0));
      setJulyLine(user.reduce((total, user) => {
        if (user.month==="july"&&user.status===1) {
          return total + user.amount;
        } else {
          return total;
        }
      }, 0));
      setMayFail(user.reduce((total, user) => 
      {
        if (user.month==="may"&&user.status===1) {
          return total + user.amount;
        } else {
          return total;
        }
      }
      ,0));
      setJuneFail(user.reduce((total, user) => {
        if (user.month==="june"&&user.status===0) {
          return total + user.amount;
        } else {
          return total;
        }
      }, 0));
      setJulyFail(user.reduce((total, user) => {
        if (user.month==="july"&&user.status===0) {
          return total + user.amount;
        } else {
          return total;
        }
      }, 0));

},[])
  return (
    <>
      <CCard className="mb-3">
      <CCardBody>
          <CRow>
            <CCol xs={12} sm={6} lg={3}>
              <CWidgetStatsF
                className="mb-3"
                icon={<CIcon width={50} icon={cilBank} size="xl" />}
                padding={false}
                title="Recieved"
                value={received}
                color="primary"
              />
            </CCol>
            <CCol xs={12} sm={6} lg={3}>
              <CWidgetStatsF
                className="mb-3"
                icon={<CIcon width={50} icon={cibCcMastercard} size="xl" />}
                padding={false}
                title="Master Card"
                value={master}
                color="info"
              />
            </CCol>
            <CCol xs={12} sm={6} lg={3}>
              <CWidgetStatsF
                className="mb-3"
                icon={<CIcon width={50} icon={cibCcVisa} size="xl" />}
                padding={false}
                title="Visa Card"
                value={visa}
                color="warning"
              />
            </CCol>
            <CCol xs={12} sm={6} lg={3}>
              <CWidgetStatsF
                className="mb-3"
                icon={<CIcon width={50} icon={cilReportSlash} size="xl" />}
                padding={false}
                title="Failed"
                value={failed}
                color="danger"
              />
            </CCol>
          </CRow>
      </CCardBody>
      </CCard>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Traffic {' & '} Sales</CCardHeader>
            <CCardBody>
      
              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>User</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Txn Id</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Terminl Id</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Card Number</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Txn Amount</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">TxnResponse</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">TxnInitiatedTime</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">TxnResponseReceivedTime</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {user.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.name}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.txn_id}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.terminal_id}</div>
                      </CTableDataCell >
                      <CTableDataCell className="text-center">
                        {item.card_type==='master'?<CIcon size="xl" icon={cibCcMastercard} />
:
<CIcon size="xl" icon={cibCcVisa} />
}

                        <div>{item.card_number}</div>
                      </CTableDataCell >
                      <CTableDataCell className="text-center">
                        <div>{item.amount}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.status?<div className="text-success">Success</div>:<div className="text-danger">Failed</div>}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <strong>{item.time}</strong>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <strong>{item.end_time}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
              <br/>
              <CRow>
     <CCol xs={12} sm={6} lg={4}>
        <CCard className="mb-4">
          <CCardHeader>Transaction Amount Wise</CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['Recevied Amount', 'Failed Amount'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651'],
                    data: [success,failure],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} sm={6} lg={4}>
        <CCard className="mb-4">
          <CCardHeader>Transaction Status Wise</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['Succesful Txn', 'Failed Txn'],
                datasets: [
                  {
                    data: [pieFailure, pieSuccess],
                    backgroundColor: ['#FF6384', '#36A2EB'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} sm={6} lg={4}>
        <CCard className="mb-4">
          <CCardHeader>Card Wise Transaction Count</CCardHeader>
          <CCardBody>
            <CChartPolarArea
              data={{
                labels: ['Master', 'Visa'],
                datasets: [
                  {
                    data: [polarSuccess,polarFailure],
                    backgroundColor: ['#FF6384', '#4BC0C0'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} sm={6} lg={6}>
        <CCard className="mb-4">
          <CCardHeader>Monthly Amount received/success</CCardHeader>
          <CCardBody>
          <CChartLine
              data={{
                labels: ['May', 'June', 'July'],
                datasets: [
                  {
                    label: 'Failed Transaction',
                    backgroundColor: 'red',
                    borderColor: 'red',
                    pointBackgroundColor: 'red',
                    pointBorderColor: '#fff',
                    data: [mayFail,juneFail,julyFail],
                  },
                  {
                    label: 'SuccessFull Transaction',
                    backgroundColor: 'green',
                    borderColor: 'green',
                    pointBackgroundColor: 'green',
                    pointBorderColor: '#fff',
                    data: [mayLine,juneLine,julyLine],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12} sm={6} lg={6}>
        <CCard className="mb-4">
          <CCardHeader>Monthly revenue</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: [ 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'Monthly revenue',
                    backgroundColor: '#f87979',
                    data: [may,june,july],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
