import React from "react";
import {Link} from 'react-router-dom';
import '../App.css';
import '../components/drop.css';
import Login1 from "../Login1";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {FiLogOut} from 'react-icons/fi';
function Head(){
    const navigate = useNavigate()
//   useEffect(()=>{
//     if(!localStorage.getItem('empId'))
//       window.location.href = '/'
//   })    
    return (
        <nav id='nav'>
            <li>Faculty Diary</li>
            <ul>
                <li><Link to='/home' >Home</Link></li>
                <li><Link to='/Profile' >Profile</Link></li>
                <li><Link to='/Database' >Database</Link></li>
                <li><Link to='/Calander' >Calendar</Link></li>
                <li><Link to='/Mydiary' >Mydiary</Link></li>
                {/* <li><Link to='/index' >logout</Link></li> */}
                {/* <li><Link to='/Login' >Login</Link></li> */}
                <li onClick={(e)=>{
                    e.preventDefault();
        localStorage.removeItem('data')
                    navigate('/')
                }}><a><FiLogOut/></a></li>
            </ul>
        </nav>

    )
}
export default Head;