import React from 'react';
import './App.css';
import Login1 from './Login1';
import App from './App';
import axios from 'axios';
import {useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
function Register(){
  const navigate = useNavigate()
    const [employee, setEmployee] = useState({
    employeeID: '',
    firstName: '',
    lastName: '',
    dob: '',
    nationality: '',
    aadharNo: '',
    mobile: '',
    email: '',
    state: '',
    city: '',
    residence: '',
    pincode: '',
    qualifications: '',
    experience: '',
    expertise: '',
    password: '',
    cpassword:'',
    designation:'', 
    certificate1:'',
    certificate2:'',
    certificate3:'',
    certificate4:'',
    certificate5:'',
    school:'',
    inter:'',
    degree:'',
    workshop1:'',
    workshop2:''
  });

  const handleInputChange = (event) => {

    const { name, value } = event.target;
    // if(name === 'dob')
        // console.log(event.target)
    setEmployee((employee) => ({
      ...employee,
      [name]: value,
    }));
    console.log(employee);
  };
  const handleok=(event)=>{
    event.preventDefault();
    handleSubmit();
    alert('Employee registered successfully');
    navigate('/');

  }
  const handleSubmit = (event) => {
    axios.post('http://localhost:8090/demo', employee)
      .then((response) => {
        window.location.href = '/';
        
        navigate('/')
      }).catch((error) => {
        console.error(error);
        alert('Error registering employee');
      });
      
  };
    return(
        <div id='div1'>
        <div id='formout'>
            <div className="formdiv">
                <div className="row justify-content-center">
              
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        <div className="form">
                            <h1 className="text-center">Sign Up</h1>
                            <form onSubmit={handleok}>
                                <div className="form-group">
                                    <label><b>Employee ID:</b></label>
                                    <input type="text" className="form-control" placeholder="Employee ID"  onChange={handleInputChange} name="employeeID"/>
                                </div>
                                <div className="form-group">
                                    <label><b>First Name: </b></label>
                                    <input type="text" className="form-control" placeholder="First Name"  onChange={handleInputChange} name="firstName"/>

                                    <label><b>Second Name: </b></label>
                                    <input type="text" className="form-control" placeholder="Second Name"  onChange={handleInputChange} name="lastName"/>
                                </div>
                                <div className="form-group">
                                    <label><b>DOB:</b></label>
                                    <input type="date" className="form-control" placeholder="dd-mm-yyyy"  onChange={handleInputChange} name="dob"/>
                                </div>
                                <div className="form-group">
                                    <label><b>Nationality: </b></label>
                                    <input type="text" className="form-control" placeholder="Nation"   onChange={handleInputChange} name="nationality"/>
                                </div>
                                <div className="form-group">
                                    <label><b>Designation: </b></label>
                                    <input type="text" className="form-control" placeholder="designation"   onChange={handleInputChange} name="designation"/>
                                </div>
                                <div className="form-group">
                                    <label><b>Aadhar No:</b></label>
                                    <input type="text" className="form-control" placeholder="Aadhar No." maxLength={16} minLength={16}   onChange={handleInputChange} name="aadharNo"/>
                                </div>
                                <div className="form-group row">
                                    <div className="col">
                                        <label><b>Mobile:</b></label>
                                        <input type="text" className="form-control" minLength={10} required   onChange={handleInputChange} name="mobile"/>
                                    </div>
                                    <div className="col">
                                        <label><b>Email:</b></label>
                                        <input type="email" className="form-control"  onChange={handleInputChange} name="email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label><b>Educational Details</b></label>
                                    <input type="text" className="form-control" placeholder="Enter your school" name='school'  onChange={handleInputChange}/>
                                    <input type="text" className="form-control" placeholder="Enter your Inter/Diploma" name='inter'  onChange={handleInputChange}/>
                                    <input type="text" className="form-control" placeholder="Enter your last Degree" name='degree'  onChange={handleInputChange}/>                               
                                </div>
                                <div className="form-group">
                                    <label><b>State:</b></label>
                                    <input type="text" className="form-control" placeholder="Enter your State"  name="state" onChange={handleInputChange}/>
                                </div>
                                <div className="form-group">
                                    <label><b>City:</b></label>
                                    <input type="text" className="form-control" placeholder="Enter your City"  name="city" onChange={handleInputChange}/>
                                </div>
                                <div className="form-group">
                                    <label><b>Residence:</b></label>
                                    <textarea className="form-control"  name="residence" onChange={handleInputChange}/>
                                </div>
                                <div className="form-group">
                                    <label><b>Pin Code:</b></label>
                                    <input type="number" className="form-control" placeholder="Enter your Pin Code" minLength={6} maxLength={6} name="pincode"  onChange={handleInputChange}/>
                                </div>
                                <div className="form-group">
                                    <label><b>Qualifications</b></label>
                                    <input type="text" className="form-control" placeholder="Enter your Qualification(s)" name='qualifications'  onChange={handleInputChange}/>
                                </div>
                                <div className="form-group">
                                    <label><b>Certificates</b></label>
                                    <input type="text" className="form-control" placeholder="Enter your Certificate Name" name='certificate1'  onChange={handleInputChange}/>
                                    <input type="text" className="form-control" placeholder="Enter your Certificate Name" name='certificate2'  onChange={handleInputChange}/>
                                    <input type="text" className="form-control" placeholder="Enter your Certificate Name" name='certificate3'  onChange={handleInputChange}/> 
                                    <input type="text" className="form-control" placeholder="Enter your Certificate Name" name='certificate4'  onChange={handleInputChange}/>
                                    <input type="text" className="form-control" placeholder="Enter your Certificate Name" name='certificate5'  onChange={handleInputChange}/>
                                </div>
                                <div className="form-group">
                                    <label><b>Workshops:</b></label>
                                    <input type="text" className="form-control" placeholder="Enter Details"  name="workshop1" onChange={handleInputChange}/>
                                    <input type="text" className="form-control" placeholder="Enter Details"  name="workshop2" onChange={handleInputChange}/>
                                </div>
                                <div className="form-group">
                                    <label><b>Experience</b></label>
                                    <select name="experience" className='form-control'  onChange={(e) => handleInputChange(e)}>
                                        <option value="" >Select Your Experience</option>
                                        <option value="0-5">0-5 yrs</option>
                                        <option value="6-10">6-10 yrs</option>
                                        <option value="11-15">11-15 yrs</option>
                                        <option value="16-20">16-20 yrs</option>
                                        <option value="20+">20 yrs-above</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label><b>Area of Subject(s)/Expertise</b></label>
                                    <textarea className='form-control' name='expertise' onChange={handleInputChange} ></textarea>
                                </div>
                                {/* <div className="form-group">
                                    <label><b>Area of Subject(s)/Expertise</b></label>
                                    <textarea className='form-control' name='expertise' onChange={handleInputChange} value={employee.expertise}></textarea>
                                </div> */}
                                
                                <div className="form-group">
                                    <label><b>Password</b> </label>
                                    <input type="password" className="form-control" placeholder="Password" minLength={5} name="password"  onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label><b>Confirm Password</b></label>
                                    <input type="password" className="form-control" placeholder="Confirm Password" minLength={5}  name="cpassword"  onChange={handleInputChange} />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    );
}

export default Register;
