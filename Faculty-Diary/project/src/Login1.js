
import React from 'react';
import {useState , useEffect} from 'react';
import App from './App'
import Foot from './Foot';
import Register from './Register';
import './components/component.css';
import { Container, Row, Col, Form, Button, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login1() {
  const navigate = useNavigate()
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  // const [employeeID,setEmployeeID]=useState({});
  // useEffect(()=>{
  //   if(!localStorage.getItem('data'))
  //     navigate('/');
  // })

  const handelUsername = (e) => {
    console.log(e.target.value)
    setUsername(e.target.value);
  }

  const handelPassword = (e) => {
    // console.log(e.target.value)
    setPassword(e.target.value);
  }

  useEffect(() => {
    axios.get('http://localhost:8090/demo').then((res)=>{
      setUsers(res.data);
      console.log(users);
    })
  },[])
  localStorage.removeItem('data')
  const handleLogin = (e) => {
    e.preventDefault()
    // window.location.href = '/homes'
    const user = users.find((ele) =>{ return ele.employeeID === username && ele.password === password;});
    console.log(username,password)
    if(user === null || user === undefined)
    {
      alert('wrong crediantials')
      // localStorage.removeItem('data');
  }
    else{
      localStorage.setItem('data',JSON.stringify(user))
      window.location.href = '/home'
      console.log('logged')
    }
  };
  const handelRegister=(e)=>{
    e.preventDefault()
    console.log('register')
    window.location.href = '/register'
    // navigate('/register')
  }
    return (
       
      <div id='conta1' >
        
        <div id='home'>
        <Container fluid>
          <Row>
            <Col md={6} className="mx-auto">
              <div className="card">
                <div className="card-body">
                  <h1 id='backk'>Login</h1>
                  <br />
                  <Form onSubmit={handleLogin}>
                    <Form.Group>
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" placeholder="Enter username" value={username} onChange={handelUsername} required />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" value={password} onChange={handelPassword} required />
                    </Form.Group>
                    <button variant="primary" type="submit" className='btn'>Login</button>
                    <br />
                    <br />
                    <p id='regs'>
                      Don't have an account?{' '}
                      <a href='' onClick={handelRegister}>
                        Sign Up 
                      </a>
                    </p>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
          <div>
          </div>
        </div>
      </div>
      
    );
  }
export default Login1;

