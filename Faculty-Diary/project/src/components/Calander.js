import React from "react";
import './calander.css';
import Calendar from "react-calendar";
import Table from 'react-bootstrap/Table';
import {AiOutlineCloudDownload} from 'react-icons/ai';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Calander=()=>{
    const padding={
        paddingTop:'1.5%',
        paddingBottom:'1%'
      }
      const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('data'))
      navigate('/')
  })
    return (
        <div id='calma'>
            <h1>Academic Calander</h1>
            <div className="cal">
                <div id='calander'>
                    <Calendar/>
                </div>
                <h3 id='hee'>Events</h3>
                <div id='calsub'>
                    
                    <ul>
                        <li>Project Space started afrom 3-04-2023</li>
                        <li>Fullstack-Dr+ class schedule changed</li>
                        <li>Technical hub going to conduct events</li>
                        <li>Meeting scheluled</li>
                        <li>College going to conduct events</li>
                        <li>--------------------------</li>
                    </ul>

                </div>
                
                <div className='container-fluid' id='table'>
              <Table responsive bordered='true'>
                <thead>
                <tr >
                  <th>Regulation</th>
                  <th>Branch</th>
                  <th>Download</th>
                  
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td style={padding}>AR20</td>
                  <td style={padding}>COMPUTER SCIENCE AND ENGINEERING</td>
                  <td style={padding}><AiOutlineCloudDownload/></td>
                  
                </tr>
                <tr>
                  <td style={padding}>AR19</td>
                  <td style={padding}>ELECTRICAL AND ELECTRONICS  ENGINEERING</td>
                  <td style={padding}><AiOutlineCloudDownload/></td>
                  
                </tr>
                <tr>
                  <td style={padding}>AR20</td>
                  <td style={padding}>ELECTRICAL AND COMMUNICATION  ENGINEERING</td>
                  <td style={padding}><AiOutlineCloudDownload/></td>
                  
                </tr>
                <tr>
                  <td style={padding}>AR20</td>
                  <td style={padding}>CIVIL  ENGINEERING</td>
                  <td style={padding}><AiOutlineCloudDownload/></td>
                  
                </tr>
                <tr>
                  <td style={padding}>AR19</td>
                  <td style={padding}>MECHANICAL  ENGINEERING</td>
                  <td style={padding}><AiOutlineCloudDownload/></td>
                  
                </tr>
                <tr>
                  <td style={padding}>AR19</td>
                  <td style={padding}>COMPUTER SCIENCE AND ENGINEERING</td>
                  <td style={padding}><AiOutlineCloudDownload/></td>
                  
                </tr>
                <tr>
                  <td style={padding}>AR20</td>
                  <td style={padding}>ELECTRICAL AND ELECTRONICS  ENGINEERING</td>
                  <td style={padding}><AiOutlineCloudDownload/></td>
                  
                </tr>
            
                
                
                </tbody>
            </Table>
            </div>

            </div>
        </div>
        
    )
}
export  {Calander};
