
import './App.css';
import React, { useEffect,useState } from "react";
import Home from "./Home.jsx";
function App() {
  const [data,setData]=useState();
  const URL="https://assessment.api.vweb.app/user";
  const handleFetch = () =>{
    fetch(URL)
    .then((response) => response.json())
    .then((body)=>{
        console.log(body);
        setData(body);
    })
    .catch((error)=>console.error("Error",error));
  };
  useEffect(()=>{
    handleFetch();
  },[]);
  if(data==null){
    return (<div>Loading  ...</div>);
  }
  return (
    <div>
      <div className='header'>
        <h1>Edvora</h1>
        <h2 className='rightside'>{data.name} </h2>
        <img src={data.url} alt="img"/>
      </div>
      <Home station={data.station_code}/>
    </div>
  );
}

export default App;
