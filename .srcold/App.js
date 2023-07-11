import {  Col, Container,Row } from "react-bootstrap";
import { AreaChart } from "./Chart/AreaChart";
import { DoughnutChart } from "./Chart/DoughnutChart";
import { PieChart } from "./Chart/PieChart";
import { PolarChart } from "./Chart/PolarChart";
import { VerticalChart } from "./Chart/VerticalChart";
import MainNavbar from "./Components/Navbar";
import TransactionTable from "./Components/Table";
import DashboardCard from "./Components/DashboardCard"

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
 
  const res ={
   
    "user":
    [
     {
         "txn_id":"#123",
         "device_":"anr_1",
     "name":"John",
     "payment_method":"card",
     "card_type":"visa",
     "curenccy":"INR",
     "amount":1000,
     "date":"07/05/23",
     "time":"08:52:11",
     "month":"may",
     "card_number":"123456789012",
     "status":0
    },
    {
      "txn_id":"#124",
      "device_":"anr_1",
  "name":"Sam",
  "payment_method":"card",
  "card_type":"master",
  "curenccy":"INR",
  "amount":1000,
  "date":"07/05/23",
  "time":"15:17:47",
  "month":"may",
  "card_number":"123456789012",
  "status":1
 },
    
    {
     "txn_id":"#125",
     "device_":"anr_2",
     "name":"Mitchel",
    "payment_method":"card",
    "card_type":"visa",
    "curenccy":"INR",
    "amount":1300,
    "date":"07/06/23",
    "month":"june",
    "time":"20:34:51",
    "card_number":"123456789013",
    "status":1
  
   },
   {
    "txn_id":"#127",
    "device_":"anr_2",
"name":"Marsh",
"payment_method":"card",
"card_type":"visa",
"curenccy":"INR",
"amount":1222,
"date":"07/06/23",
"time":"23:04:59",
"month":"june",
"card_number":"123456789012",
"status":0
},
{
  "txn_id":"#128",
  "device_":"anr_2",
"name":"Steve",
"payment_method":"card",
"card_type":"master",
"curenccy":"INR",
"amount":1222,
"date":"07/07/23",
"time":"10:33:21",
"month":"july",
"card_number":"123456789012",
"status":1
},
{
  "txn_id":"#129",
  "device_":"anr_1",
"name":"Harry",
"payment_method":"card",
"card_type":"visa",
"curenccy":"INR",
"amount":1000,
"date":"07/07/23",
"time":"21:44:01",
"month":"july",
"card_number":"123456789012",
"status":0
},
  ]
  }

 
  return(
    <>
   <MainNavbar/>
   <DashboardCard res={res}/>
   <TransactionTable res={res}/>

{user ?
<>
    <Container >
      <Row md={4} className="row justify-content-between mt-5" >
    <Col className="col-auto">
    <DoughnutChart res={res}/>
    </Col>
    <Col className="col-auto">
    <PieChart res={res}/>
</Col>
<Col className="col-auto">
    <PolarChart res={res}/>
    </Col>
</Row>
</Container>
<Container>
<Row className="row justify-content-between mt-5">
    <Col className="col">
    <AreaChart res={res}/>
    </Col>
    <Col className="col">
    <VerticalChart res={res}/>
    </Col>
    </Row>
    </Container>
    </>
    :
    <Container className="mt-5">
<p className="">Please login to to Check the Chart</p>
</Container>
}
    </>
  )
}

export default App;
