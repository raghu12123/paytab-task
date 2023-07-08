import { Container, Row} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";

export default function DashboardCard(props){
  const res=props.res

  const [received,setReceived]=useState()
  const [master,setMaster]=useState()
  const [visa,setVisa]=useState()
  const [failed,setFailed]=useState()
  useEffect(()=>{
    setReceived(res.user.reduce((total, user) =>{
    if (user.status === 1) {
      return total + user.amount;
    } else {
      return total;
    }
  },0))

  setMaster(res.user.reduce((total, user) =>{
    if (user.status === 1 &&user.card_type==="master") {
      return total + user.amount;
    } else {
      return total;
    }
  },0))

  setVisa(res.user.reduce((total, user) =>{
    if (user.status === 1 &&user.card_type==="visa") {
      return total + user.amount;
    } else {
      return total;
    }
  },0))

  setFailed(res.user.reduce((total, user) =>{
    if (user.status === 0 ) {
      return total + user.amount;
    } else {
      return total;
    }
  },0))

},[])
    return(
        <Container >
        <Row style={{margin:"12px"}} className="mt-5 justify-content-between">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title class="text-success display-6">{received}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Recived Amount</Card.Subtitle>
         
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title class="text-primary display-6">{master}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Master Card</Card.Subtitle>
       
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title class="text-warning display-6">{visa}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Visa Card</Card.Subtitle>
         
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title class="text-danger display-6">{failed}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Failed Amount</Card.Subtitle>
        </Card.Body>
      </Card>
      </Row>
      </Container>
    )
}