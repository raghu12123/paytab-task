import { useState } from "react";
import { Button, Container, Form, Modal} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
export default function TransactionTable(props){
  const res=props.res

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
    return(
        <Container>
        <Table responsive="lg" className="mt-5" striped>
            <thead>
              <tr>
                <th class="text-center">Ref</th>
                <th class="text-center">Customer Name</th>
                <th class="text-center">Type</th>
                <th class="text-center">Payment Method</th>
                <th class="text-center">Curency</th>
                <th class="text-center">Amount</th>
                <th class="text-center">Date</th>
                <th class="text-center">Time</th>
                <th class="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {res.user.map((item,index)=>
              <tr key={index}>
                <td class="text-center">{item.txn_id}</td>
                <td class="text-center">{item.name}</td>
                <td class="text-center">{item.card_type}</td>
                <td class="text-center">{item.payment_method}</td>
                <td class="text-center">{item.curenccy}</td>
                <td class="text-center">{item.amount}</td>
                <td class="text-center">{item.date}</td>
                <td class="text-center">{item.time}</td>
                <td class="text-center">{item.status? "Success":"Failed"}</td>

              </tr>
              )}
            </tbody>
          </Table>
          <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Customer Name</Form.Label>
        <Form.Control type="name" placeholder="name@example.com" />
      </Form.Group>
      <Form.Label>Type</Form.Label>
      <Form.Select className="mb-3" aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    <Form.Label>Payment Method</Form.Label>

    <Form.Select className="mb-3" aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    <Form.Label>Status</Form.Label>

    <Form.Select className="mb-3" aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    <Form.Label>Currency</Form.Label>

    <Form.Select className="mb-3" aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="amount" placeholder="Password" />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Pay
          </Button>
        </Modal.Footer>
      </Modal>
        </Container>
    )
}