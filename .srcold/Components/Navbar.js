import { useEffect, useState } from "react";
import { Navbar, Container, Button,Offcanvas, Form} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login,logout } from "../redux/slices/auth";
import { toast } from 'react-toastify';

export default function MainNavbar(){

  const [show, setShow] = useState(false);
  const [mobile,setMobile]=useState('');
  const [islogged, setIsLogged] = useState(false);

  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleMobile = (e) => {
    setMobile(e);
  }
  const handleSubmit = () => 
   {
    console.log(mobile)
      if (mobile!=="undefined"&&mobile.length === 10) {
        dispatch(login({ mobile }))
        handleClose()
        window.location.reload()
      }
      else{
        toast('Please enter Valid Number');
      }
    }
    const logOut = () => {
      dispatch(logout());
      window.location.reload('/');
    }
    useEffect(()=>{
      let user = JSON.parse(localStorage.getItem("user"));

  if(user){
    setIsLogged(true)
  }
    },[islogged])
      
    return(
      <> 
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Login</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p>Please login with any 10 digit number</p>
      <Form onSubmit={e => { e.preventDefault(); }}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="number" placeholder="Enter mobile number" value={mobile} onChange={event => handleMobile(event.target.value)}/>
      </Form.Group>
      <Button variant="outline-primary" onClick={() => handleSubmit()}>Login</Button>
    </Form>
      </Offcanvas.Body>
    </Offcanvas>
        <Navbar bg="primary" data-bs-theme="dark" >
        <Container>
    <Navbar.Brand href="#home">Transaction Dashboard</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      {!islogged?
    <Button variant="secondary" onClick={handleShow}>
      Login
    </Button>
    :
    <>
      <Navbar.Text>
        Signed in as: <a href="#login">Ramanathan</a>
      </Navbar.Text>
         <Button variant="secondary" onClick={logOut} className="mx-2">
         Logout
       </Button>
       </>
}
    </Navbar.Collapse>
  </Container>
</Navbar>
</>

    )
}