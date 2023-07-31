import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './mydiary.css'
const Mydiary=()=>{
    const navigate = useNavigate()
    useEffect(()=>{
      if(!localStorage.getItem('data'))
        navigate('/')
    })
    const k=JSON.parse(localStorage.getItem('data')).employeeID;
    // alert(k);

  const [showScheduling, setShowScheduling] = useState(false);
  const [showDiary, setShowDiary] = useState(false);
  const [viewSchedule, setViewSchedule] = useState(false);
  const [newSchedule, setNewSchedule] = useState(false);
  const [viewDiary, setViewDiary] = useState(false);
  const [newDiary, setNewDiary] = useState(false);
  const [dairy,setdairy]=useState('');
  const [schedule,setschedule]=useState('');
  const [nschedule, setnschedule]=useState({
    employeeID:k,
    date:'',
    stime:'',
    etime:'',
    class:'',
    description:''
    
  })
  const [ndiary, setndiary]=useState({
    employeeID:k,
    ddate:'',
    dstime:'',
    detime:'',
    dclass:'',
    ddescription:''    
  })
  // useEffect(() => {
  //   axios.get('http://localhost:8090/demo').then((res)=>{
  //     setUsers(res.data)
  //   })
  // },[])
  const ninputchange = (event) => {
    const { name, value } = event.target;
    setnschedule((employ) => ({
      ...employ,
      [name]: value,
    }));
    setndiary((employ) => ({
      ...employ,
      [name]: value,
    }));
    console.log(ndiary);
  };
  const nsetschelulesubmit = (event) => {
    axios.post('http://localhost:8090/demo1', nschedule)
      .then((response) => {
        alert("scheduled sucessfully");
        navigate('/Mydiary')
      }).catch((error) => {
        console.error(error);
        alert('Error while inserting data');
      });
      
  };
  const nhadlediary = (event) => {
    axios.post('http://localhost:8090/demo2', ndiary)
      .then((response) => {
        alert("scheduled sucessfully");
        navigate('/Mydiary')
      }).catch((error) => {
        console.error(error);
        alert('Error while inserting data');
      });
      
  };
  let filteredSchedule = [];
  let filteredDiary = [];

  if (schedule) {
    try {
      const parsedSchedule = schedule;
      filteredSchedule = parsedSchedule.filter((item) => item.employeeID === k);
      // alert(filteredSchedule)
    } catch (error) {
      console.error("Error parsing schedule JSON:", error);
    }
  }
  if (dairy) {
    try {
      const parsedSchedul = dairy;
      filteredDiary = parsedSchedul.filter((item) => item.employeeID === k);
      // alert(filteredSchedule)
    } catch (error) {
      console.error("Error parsing schedule JSON:", error);
    }
  }
  // let i=JSON.stringify(schedule);
  
  // JSON.parse(schedule).filter((item) => item.employeeID === k);
  // const dairyyyyy = dairy.filter((item) => item.employeeID === k);

  const handleSchedulingClick = () => {
    setShowScheduling(true);
    setShowDiary(false);
  };

  const handleDiaryClick = () => {
    setShowDiary(true);
    setShowScheduling(false);
  };

  const viewScheduleClick = () => {
    setViewSchedule(true);
    setNewSchedule(false);
  };

  const newScheduleClick = () => {
    setNewSchedule(true);
    setViewSchedule(false);
  };

  const viewDiaryClick = () => {
    setViewDiary(true);
    setNewDiary(false);
  };

  const newDiaryClick = () => {
    setNewDiary(true);
    setViewDiary(false);
  };

  useEffect(() => {
    axios.get('http://localhost:8090/demo2').then((res)=>{
      setdairy(res.data)
    })
  },[])
  useEffect(() => {
    axios.get('http://localhost:8090/demo1').then((res)=>{
      setschedule(res.data)
    })
  },[])

  return (
    <>
    {/* <Head /> */}
    <div className="main">
      <h1 id="title" align="center">
        My Diary
      </h1>
      <div id="content" align="center">
        {/* main scheduling */}
        
          <button className="but" onClick={handleSchedulingClick}>
          Schedule
          </button>
        
        {/* main diary */}

        
          <button  className='but' onClick={handleDiaryClick}>
          Diary
        </button>
        <div id="innercontent">
          {/* out view scheduling */}
          {showScheduling && (
            <div>
              
              <button className='but1' onClick={viewScheduleClick}>
                  View Schedule
              </button>

              {/* inner view scheduling */}

              {viewSchedule && <div id="inviewschedule">
                <div className="div1">
                    <h2 id="subtitle">Schedule</h2>
                    <div className="divtext">
                      <h3 id='tle'>Hey Emp!</h3>
                      <h5>Your Schedule</h5>
                      <br></br>
                        <table>
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Start Time</th>
                              <th>End Time</th>
                              <th>Class / Meeting</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                          {filteredSchedule.map((item) =>(
                            
                            <tr id='tbr'>
                              <td id='tbr'>{item.date}</td>
                              <td id='tbr'>{item.stime}</td>
                              <td id='tbr'>{item.etime}</td>
                              <td id='tbr'>{item.class}</td>
                              <td id='tbr'>{item.description}</td>
                            </tr>
                          ))}
                          </tbody>
                        </table>  
                    </div>
                  </div>
              </div>}
                <button className='but1' onClick={newScheduleClick}>
                New Schedule
              </button>

              {newSchedule && (
                <div id="innewschedule">
                  <div className="div1">
                    <h2 id="subtitle">Schedule</h2>
                    <div className="divtext">
                      <h3 id='tle'>Hey Emp!</h3>
                      <h5>Schedule your work..!!!!!!!!!!!!</h5>
                      <br></br>
                      <form onSubmit={nsetschelulesubmit}>
                        <table>
                          <tr>
                            <td>
                              <h5>
                                <b>Date:</b>
                              </h5>
                            </td>
                            <td>
                              <input type="date" name="date" onChange={ninputchange} ></input>
                            </td>
                          </tr>
                          <br></br>

                          <tr>
                            <td>
                              <h5>
                                <b>Duration:</b>
                              </h5>
                            </td>
                            <td>
                              <input type="time" name="stime" onChange={ninputchange} ></input> <b>TO</b>
                              <input type="time" name="etime" onChange={ninputchange}></input>
                            </td>
                          </tr>

                          <br></br>
                          <tr>
                            <td>
                              <h5>
                                <b>Meeting/Class: </b>
                              </h5>
                            </td>
                            <td>
                              <textarea id="text" name="class" onChange={ninputchange}></textarea>
                            </td>
                          </tr>

                          <br></br>
                          <tr>
                            <td>
                              <h5>
                                <b>Description:</b>
                              </h5>
                            </td>
                          </tr>
                        </table>

                        <textarea className="text1"  placeholder="Write anything..." name="description" onChange={ninputchange}></textarea>
                        <div id="sub">
                          <button className="btn" type="submit" >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {showDiary && (
            <div>
              <button className="but" onClick={viewDiaryClick} >
                View Diary
              </button>  
              {/* inner view diary */}
              {viewDiary && <div>
                <div className="div1">
                    <div className="subtitle">
                      <h2 id="subtitle">Dairy</h2>
                    </div>

                    <div className="divtext">
                      <h3 id='tle'>Hey Emp!</h3>
                      <h5>Your Dairy</h5>
                      <table>
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Class / Meeting</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                        {filteredDiary.map((item) => (
                          <tr id='tbr'>
                            <td id='tbr'>{item.ddate}</td>
                            <td id='tbr'>{item.dstime}</td>
                            <td id='tbr'>{item.detime}</td>
                            <td id='tbr'>{item.dclass}</td>
                            <td id='tbr'>{item.ddescription}</td>
                          </tr>
                        ))}
                        </tbody>
                      </table>                      
                    </div>
                  </div>
                </div>}
              {/* outer new diary */}
              <button className="but" onClick={newDiaryClick} >
                New Diary
              </button>
              {/* inner new diary */}
              {newDiary && (
                <div>
                  <div className="div1">
                    <div className="subtitle">
                      <h2 id="subtitle">Dairy</h2>
                    </div>

                    <div className="divtext">
                      <h3 id='tle'>Hey Emp!</h3>
                      <h5>Make your Note..</h5>
                      <br></br>
                      <form>
                        <table>
                          <tr>
                            <td><h5><b>Date:</b></h5></td>
                            <td><input type="date" name='ddate' onChange={ninputchange}></input></td>
                          </tr>

                          <br></br>

                          <tr>
                            <td><h5><b>Duration:</b></h5></td>
                            <td><input type="time" name='dstime' onChange={ninputchange}></input> <b>
                              TO</b><input type="time" name='detime' onChange={ninputchange}></input>
                            </td>
                          </tr>
                          <br></br>
                          <tr>
                            <td>
                              <label id="rad">
                                <h5>
                                  <b>Meeting/Class: </b>
                                </h5>
                              </label>
                            </td>
                            <td>
                              <textarea id="text" name='dclass' onChange={ninputchange}></textarea>
                            </td>
                          </tr>
                          <br></br>
                          <tr>
                            <td>
                              <h5>
                                <b>Description:</b>
                              </h5>
                            </td>
                          </tr>
                        </table>

                        <textarea className="text1" placeholder="Write anything..." name='ddescription' onChange={ninputchange}></textarea>
                        <div id="sub">
                          <button className="btn" type="submit" onClick={nhadlediary}>
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
    {/* <Foot /> */}
    </>
  );
}
export  {Mydiary}