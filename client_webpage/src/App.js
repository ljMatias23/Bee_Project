import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [duration, setDuration] = useState("");
  const [location, setLocation] = useState("");
  const [height, setHeight] = useState("");
  const [size, setSize] = useState("");

  const submitReport = () => {
    Axios.post("http://localhost:3001/api/insert", {
      address: address,
      email: email,
      duration: duration,
      location: location,
      height: height,
      size: size
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

        <label>duration:</label>
        <input 
        type="text"
        name="duration"
        onChange={(e)=> {
          setDuration(e.target.value);
        }} />

        <label>location:</label>
        <input 
        type="text"
        name="location"
        onChange={(e)=> {
          setLocation(e.target.value);
        }} />

        <label>height:</label>
        <input 
        type="text"
        name="height"
        onChange={(e)=> {
          setHeight(e.target.value);
        }} />

        <label>size:</label>
        <input 
        type="text"
        name="size"
        onChange={(e)=> {
          setSize(e.target.value);
        }} />

        <button onClick={submitReport}> Submit</button>
      </div>
    </div>
  );
}

export default App;
