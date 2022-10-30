import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const submitReport = () => {
    Axios.post("http://localhost:3001/api/insert", {
      address: address,
      email: email
    }).then(() => {
      alert('successful insert');
    });
  }
  return (
    <div className="App">
      <h1>Bee Rescue - Hive Reporting</h1>

      <div className = "form">
        <label>Address:</label>
        <input 
          type="text" 
          name="address" 
          onChange={(e)=> {
          setAddress(e.target.value);
        }} />

        <label>email:</label>
        <input 
        type="text"
        name="email"
        onChange={(e)=> {
          setEmail(e.target.value);
        }} />

        <button onClick={submitReport}> Submit</button>
      </div>
    </div>
  );
}

export default App;
