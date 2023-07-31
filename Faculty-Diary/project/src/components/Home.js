import React from "react";
import { Container } from "react-bootstrap";
import './component.css';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('data'))
      navigate('/')
  })
  return (
    
    <div style={{ display: "flex", alignItems: "center", height: "100vh",paddingLeft:'300px' }} id='conta1'>
      <Container>
        <div className="home1">
          <div id="innr" className="text-center">
            <h1 id='he'>Faculty Diary</h1>
            <h3 id='he3'>Aditya Educational Institutions</h3>
            <div id='marq'>

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export {Home};