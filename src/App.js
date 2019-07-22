import React from 'react';
import logo from './logo.svg';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './App.css';
function App() {
  return (
    <div className="App">
      <DatePicker 
      todayButton={"Today"}
      />
    </div>
  );
}

export default App;
