import React, { useState } from "react";
import "./Home.css";
import Rides from "./Rides";
const Home = (props) => {
    const [btn,setBtn]= useState(1);
    const handleCLick1=()=>{
      setBtn(1);
    }
    const handleCLick2=()=>{
      setBtn(2);
    }
    const handleCLick3=()=>{
      setBtn(3);
    }
    return (
        <div>
            <div className='buttons'>
                <button onClick={handleCLick1}>Nearest Rides</button>
                <button onClick={handleCLick2}>Upcoming Rides</button>
                <button onClick={handleCLick3}>Past Rides</button>
                <div className="dropdown">
                  <button className="dropbtn">☰Filters</button>
                  <div class="dropdown-content">
                    <button>State</button>
                    <button>City</button>
                  </div>
                </div>
                <Rides station={props.station} selectBtn={btn}/>
            </div>
            
        </div>
    );
}

export default Home;