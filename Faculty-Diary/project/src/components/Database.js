import { Container } from "react-bootstrap";
import './component.css';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
function Database() {
    const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('data'))
      navigate('/')
  })
  const [file, setFile] = useState(null);
  const [filed, setFiled] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  function getDownloadLink(filename) {
    return `${filename}`;
  }
  
  const handleSubmit = async (event) => {
    alert("clickked")
    // event.preventDefault();
    alert("uploading")
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios.post('http://localhost:8090/demo3', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    //   event.preventDefault();
      console.log(response.data);
      alert("   ////////////////////////////////")
      

    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    axios.get('http://localhost:8090/demo3').then((res)=>{
      setFiled(res.data)
    })
  },[])


  return (
    <div style={{ display: "flex", alignItems: "center", height: "100vh"}} id='conta1'>
      <Container>
        <h1>Database</h1>
        <div className="db1">
            <div id='db2'>
                <h2>
                    Faculty data Storage
                </h2>
                <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
                </form>
            <table id='dtb'>
            <thead>
                <tr>
                <th>Title</th>
                <th>Download</th>
                </tr>
            </thead>
            <tbody>
            {filed.map((file, index) => (
              <tr key={index}>
                <td>{file.name}</td>
                
                <td>
                  <a href={getDownloadLink(file.name)} download>
                    Download
                  </a>
                </td>
              </tr>
            ))}
            </tbody>
            </table>

            </div>
        </div>
      </Container>
    </div>
  );
}

export {Database};
