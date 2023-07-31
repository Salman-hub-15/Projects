
// import '../components/component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./profilee.css';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Image, Table, ListGroup, Badge , Card } from 'react-bootstrap';
import { FaUserAlt, FaUserEdit, FaClipboardList, FaGraduationCap } from 'react-icons/fa';
import { GrCertificate, GrUserExpert } from 'react-icons/gr';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useState , useEffect} from 'react';
import { HiBadgeCheck } from 'react-icons/hi';
import { BsBorderAll, BsCalendarEvent } from 'react-icons/bs';
import pic from './download.jpg';

const Profile=()=>{
  // console.log(props.employeeID.employeeID);
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('data')){
      window.location.href = '/'
    }
  })
  const [users, setUsers] = useState([]);
  // const getUsers = async () => {
  //     const response = await fetch('http://localhost:8090/demo', {
  //       method: 'GET'
  //     });
  //     const result = await response.json();
  //     setUsers(result);
  //   } 


  
  // console.log(localStorage.getItem('id'),' --- ',k);
    return (
      
      <container-fluid id='mainnn'>
        <div id='background'>
        <h1>Profile Page</h1>
      <Row id='roww'>
        <Col sm={4} id='rowin'>
          <Card id='card'>
            <Card.Img variant="top" src={pic} id='imaggg' />
            <Card.Body>
              <Card.Title>Personal Details</Card.Title>
              <Card.Text>
              <Table hover id="table">
            <tbody>
              <tr>
                <td>Employee ID</td>
                {/* <td>20A91A0532</td> */}
                <td>{JSON.parse(localStorage.getItem('data')).employeeID}</td>
              </tr>
              <tr>
                <td>Name</td>
                {/* <td>Salman Benny</td> */}
                <td>{JSON.parse(localStorage.getItem('data')).firstName}</td>
              </tr>
              <tr>
                <td>Designation</td>
                {/* <td>Student</td> */}
                <td>{JSON.parse(localStorage.getItem('data')).designation}</td>
              </tr>
              <tr>
                <td>DOB</td>
                {/* <td>15-09-2001</td> */}
                <td>{JSON.parse(localStorage.getItem('data')).dob.substr(0,10)}</td>
              </tr>
              <tr>
                <td>Nationality</td>
                {/* <td>Indian</td> */}
                <td>{JSON.parse(localStorage.getItem('data')).nationality}</td>
              </tr>
              <tr>
                <td>Experience</td>
                {/* <td>0</td> */}
                <td>{JSON.parse(localStorage.getItem('data')).experience}</td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                {/* <td>9100733887</td> */}
                <td>{JSON.parse(localStorage.getItem('data')).mobile}</td>
              </tr>
            </tbody>
          </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col sm={6}>
        <div className="container" id="prof1">
        <div className="row">
        <div className="col-sm-12" id='info'>
          <h3><u>
            Educational Details</u>
          </h3>
          <ul>
            <li><b>SSC: </b>{JSON.parse(localStorage.getItem('data')).school}</li>
            <li><b>Intermediate: </b>Aditya Junior College</li>
            <li><b>B.Tech: </b>Aditya Engineering C ollege</li>
          </ul>
          <h3><u>Certifications</u></h3>
          <ul>
            <li>{JSON.parse(localStorage.getItem('data')).certificate1}</li>
            <li>{JSON.parse(localStorage.getItem('data')).certificate2}</li>
            <li>{JSON.parse(localStorage.getItem('data')).certificate3}</li>
            <li>{JSON.parse(localStorage.getItem('data')).certificate4}</li>
            </ul>
          <h3><u>Attended Workshops:</u></h3>
            <ul>
              <li><b>Online Trading Workshop:</b> organized by the Department of Management Studies, Aalim Muhammed Salegh College of Engineering in association with Financial Express on 16th Oct 2012</li>
            
              <li><b>Introduction to Practicalities in Stock Market Operations Workshop:</b> conducted in association with Economic Times on 14th Oct 2009 organized by Aalim Muhammed Salegh College of Engineering</li>
            </ul>
        </div>
        
      </div>
    </div>
          {/* <Row>
        <div className="col-sm-5">
            <div className="form-group">
              <label htmlFor="input-1">Input 1</label>
              <input type="text" className="form-control" id="input-1" />
            </div>
          </div>
          <div className="col-sm-5">
            <div className="form-group">
              <label htmlFor="input-2">Input 2</label>
              <input type="text" className="form-control" id="input-2" />
            </div>
            </div>
            </Row> */}
         
        </Col>
        {/* <Col sm={11}>
          <p>This is the third column with a width of 11 out of 12 columns in small screens.</p>
        </Col> */}
      </Row>

      <Container id='cert'>
      <Row id='padd'>
        <Col sm={12}>
          <Row>
           <h2><u>Certificates </u></h2>
            <Col sm={5}>
              <FontAwesomeIcon icon={faCertificate} /> Microsoft Azure Fundamentals certificate
              <br />
              <FontAwesomeIcon icon={faCertificate} /> Microsoft AI Fundamentals certificate 
              <br />
              <FontAwesomeIcon icon={faCertificate} /> Microsoft Azure Fundamentals certificate
              <br />
              <FontAwesomeIcon icon={faCertificate} /> Microsoft Pyhton Fundamentals certificate
              <br />
              <FontAwesomeIcon icon={faCertificate} /> Azure 101 certificate
              <br />
              <FontAwesomeIcon icon={faCertificate} /> Oracle Java Fundamentals
              <br />
            </Col>
            
            {/* <Col sm={6}>
              <FontAwesomeIcon icon={faCertificate} /> Microsoft Azure Fundamentals certificate 7
              <br />
              <FontAwesomeIcon icon={faCertificate} /> Microsoft Azure Fundamentals certificate 8
              <br />
              <FontAwesomeIcon icon={faCertificate} /> Microsoft Azure Fundamentals certificate 9
              <br />
              <FontAwesomeIcon icon={faCertificate} /> Microsoft Azure Fundamentals certificate 10
              <br />
              <FontAwesomeIcon icon={faCertificate} /> Microsoft Azure Fundamentals certificate 11
              <br />
              <FontAwesomeIcon icon={faCertificate} /> Microsoft Azure Fundamentals certificate 12
              <br />
            </Col> */}
          </Row>
        </Col>
        <Col sm={12}>
          <h2><u>Other Professional Experience</u></h2>
          <ul></ul>
        </Col>
        <Col sm={12}>
          <ul>
            <p><b>Courses</b></p>
            <li> (Marketing Management, Human Resourse Management, Entrepreneurial Development) </li>
          </ul>
        </Col>
        <Col sm={12}>
          <ul>
            <p><b>Research Intrests</b></p>
            <li>  (Marketing, HR)  </li>
          </ul>
        </Col>
        <Col sm={12}>
          <ul>
            <p><b>Selected Publications</b></p>
            <li>  (To be listed in reverse chronology, i.e. starting with the most recent)
              [Mention Year of Publication]</li>
 <li>International Journal of Creative Research Thoughts(ISSN No:2320-2882) VOLUME NO 08, JULY 2020 EMPLOYEE RETENTION’</li>
 <li>International Journal of Recent Engineering Research and Development (IJERED) ISSN No 2455- 8761 VOLUME 05 ISSUE 07 JULY 2020 STRESS MANAGEMENT </li>
<li>Journal Name: Shanlax Journal(OPEN ACCESS) PEER REVIEWED Article Name : STRESS MANAGEMENT ISSN NO:2321-788X Volume 7.,no.5., February 2020 pp.170-74  </li>
          </ul>
        </Col>
      </Row>
    </Container>
    </div>
    </container-fluid>
    


    // <div id='conta1'>
    //   <h1>Profile Page</h1>

    // </div>
    // <div id="one">
    // <div className="container">
    // <h1 className="prof">Profile</h1>
    //   < div className="Row">
    //     <Col sm={12} md={4} id="b">
    //       <h4>PROFILE IMAGE</h4>
    //       <div id="un">
    //         <Image src={pic} id="img" />
    //       </div>
    //       <h5 id="h5">
    //         <FaUserAlt /> Personal Information <br />
    //         <b>
    //           <FaUserEdit /> edit
    //         </b>
    //       </h5>
          // <Table striped bordered hover id="table">
          //   <tbody>
          //     <tr>
          //       <td>First Name</td>
          //       <td>Arun</td>
          //     </tr>
          //     <tr>
          //       <td>Middle Name</td>
          //       <td>Kumar</td>
          //     </tr>
          //     <tr>
          //       <td>Last Name</td>
          //       <td>Rayudu</td>
          //     </tr>
          //     <tr>
          //       <td>Age</td>
          //       <td>22</td>
          //     </tr>
          //     <tr>
          //       <td>Designation</td>
          //       <td>Professor</td>
          //     </tr>
          //     <tr>
          //       <td>DOB</td>
          //       <td>13/04/2002</td>
          //     </tr>
          //     <tr>
          //       <td>DOB</td>
          //       <td>13/04/2002</td>
          //     </tr>
          //   </tbody>
          // </Table>
    //     </Col>
    // </div>
    // </div>
    // </div>
    )
}
export  default Profile; 

// import React from "react";
// import './profile.css'
// import pic from './download.jpg'
// import logo from '../logo.svg';
// import {BsCalendarEvent} from 'react-icons/bs'
// import {SlBadge} from 'react-icons/sl';import {GrUserExpert} from 'react-icons/gr';
// import {HiBadgeCheck} from 'react-icons/hi';
// import { FaAlignRight, FaUserAlt,FaUserEdit, FaClipboardList, FaGraduationCap } from 'react-icons/fa';
// import {GrCertificate} from 'react-icons/gr'
// const Profile=()=>{
//     return(
//         <>
//     <div id="main">
//         <div id="main1">
//         <h1 className="prof">Profile</h1>
//         <div id="aa">
//         <div id="b">
//             <h4>PROFILE IMAGE</h4>
//             <div id="un"><img src="#" id="img"></img></div>
//             <h5 id="h5"><FaUserAlt />  Personal Information <br></br><b><FaUserEdit/>  edit</b></h5>
//             <table cellPadding={10} align="center"  id="table">
//                 <tr id="tr">
//                     <td id="tr">First Name</td>
//                     <td id="tr">Arun</td>
//                 </tr>
//                 <tr id="tr">
//                     <td id="tr">Middle Name</td>
//                     <td id="tr">Kumar</td>
//                 </tr>
//                 <tr id="tr">
//                     <td id="tr">Last Name</td>
//                     <td id="tr">Rayudu</td>
//                 </tr>
                
//                 <tr id="tr">
//                     <td id="tr">Age</td>
//                     <td id="tr">22</td>
//                 </tr>
//                 <tr id="tr">
//                     <td id="tr">Designation</td>
//                     <td id="tr">Professor</td>
//                 </tr>
//                 <tr id="tr">
//                     <td id="tr">DOB</td>
//                     <td id="tr">13/04/2002</td>
//                 </tr>
//                 <tr id="tr">
//                     <td id="tr">DOB</td>
//                     <td id="tr">13/04/2002</td>
//                 </tr>
//             </table>
//         </div>
//         <div id="right">
//             <h5><FaUserAlt />  Personal Information    </h5>
//             <div id="edit">
//             <label id="kk"><b>First Name: </b><br></br><input type="text" id="input"></input></label>
//             <label id="k"><b>Last Name: </b><br></br><input type="text" id="input"></input></label>
//             </div>
//             <div id="edit">
//             <label id="kk"><b>Middle Name: </b><br></br><input type="text" id="input"></input></label>
//             <label id="k"><b>Age: </b><br></br><input type="text" id="input"></input></label>
//             </div>
//             <div id="edit">
//             <label id="kk"><b>Martial Status: </b><br></br><input type="text" id="input"></input></label>
//             <label id="k"><b>Designation: </b><br></br><input type="text" id="input"></input></label>
//             </div>
//             <div id="edit">
//             <label id="kk"><b>Communication Language: </b><br></br><input type="text" id="input"></input></label>
//             <label id="k"><b>Date Of Birth: </b><br></br><input type="text" id="input"></input></label>
//             </div>
//             <h4><FaGraduationCap />  Qualifications</h4>
            // <ul>
            //     <li><b>10th: </b>xyz school</li>
            //     <li><b>Inter: </b>abc college</li>
            //     <li><b>B.Tech: </b>a college</li>
                
            // </ul>
//             <h4><GrCertificate />  Certifications</h4>
//             <ul>
//                 <li></li>
//                 <li></li>
//                 <li></li>

//             </ul>
//         </div>
//         </div>
//         <div id="skills">
//             <div id="ski">
//                 <p><b><u><SlBadge/>     Skills Certificate</u></b></p>
//                 <img src="#"></img>
//                 <img src="#"></img>
//                 <img src="#"></img>
//                 <img src="#"></img>
//                 <img src="#"></img>

//             </div>
//             <div id="ski1">
//                 <p><b><u><HiBadgeCheck/>   Skills Badges</u></b></p>
//                 <img src="#"></img>
//                 <img src="#"></img>
//                 <img src="#"></img>
//                 <img src="#"></img>
//                 <img src="#"></img>

//             </div>
            
//         </div>
//         <div id="ull">
//             <p></p>
//         </div>
//         <div id="work">
//                 <b><u><BsCalendarEvent/>  WorkShops</u></b>
//                 <ul>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                 </ul>
//         </div>
//         <div id="work1">
//                 <b><u><GrUserExpert/> Other Professional Experience</u></b>
//                 <ul>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                 </ul>
//         </div>
//         <div id="work2">
//                 <b><u><FaClipboardList/>Other Details</u></b>
//                 <ul>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                     <li></li>
//                 </ul>
//         </div>
//         </div> 
//     </div>
//         </>
//     )
// }
// export  {Profile};