import React from 'react';
import { FaSistrix } from "react-icons/fa";
import './App.css';


function App() {
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="What country do you like to travel to ?" />
          <button type="submit" className="searchButton">
          <FaSistrix/> 
          </button>
        </div>
      </div>
    </>
  );
}

export default App;