import React from "react";
import {useEffect, useState} from "react";
import "./Rides.css";

const Nearest = (props) =>{
    if(!props.path.includes(props.station)){
        return (<></>);
    }
    return (
        <div className="allrides">
            <img className="imge" src={props.map} alt="Map"/>
            <p>Ride Id: {props.id}</p>
            <p>Origin Station: {props.origin_station_code}</p>
            <p >Station Path: [{props.path.join(",")}]</p>
            <p>Date: {props.date}</p>
            <p>Distance: 0</p>
            <button className="state">State</button>            
            <button className="city">City</button>
        </div>
    );
}
const Upcoming = (props) =>{
    const current=new Date();
    const today=current.toLocaleString();
    console.log(today,"today");
    console.log(props.date);
    const given=new Date(props.date).getTime();
    const checker=new Date(today).getTime()
    if(given < checker){
        return (<></>);
    }
    return (
        <div className="allrides">
            <img className="imge" src={props.map} alt="Map"/>
            <p>Ride Id: {props.id}</p>
            <p>Origin Station: {props.origin_station_code}</p>
            <p >Station Path: [{props.path.join(",")}]</p>
            <p>Date: {props.date}</p>
        </div>
    );
}
const Past = (props) =>{
    const current=new Date();
    const today=current.toLocaleString();
    console.log(today,"today");
    console.log(props.date);
    const given=new Date(props.date).getTime();
    const checker=new Date(today).getTime()
    if(given > checker){
        return (<></>);
    }
    return (
        <div className="allrides">
            <img className="imge" src={props.map} alt="Map"/>
            <p>Ride Id: {props.id}</p>
            <p>Origin Station: {props.origin_station_code}</p>
            <p >Station Path: [{props.path.join(",")}]</p>
            <p>Date: {props.date}</p>
        </div>
    );
}
function Rides(props){
    const [rides,setRides]=useState([]);
    const URL="https://assessment.api.vweb.app/rides";
    const handleFetch = () =>{
        fetch(URL)
        .then((response) => response.json())
        .then((body)=>{
            console.log(body);
            setRides(body);
        })
        .catch((error)=>console.error("Error",error));
      };
      useEffect(()=>{
        handleFetch();
      },[]);
      if(rides==null){
        return (<div>Loading  ...</div>);
      }
    return (
        <div>
            {props.selectBtn === 1 ? 
                rides.map((ride)=>{
                    return (<Nearest 
                            station={props.station} 
                            id={ride.id}
                            origin={ride.origin_station_code}
                            path={ride.station_path}
                            date={ride.date}
                            map={ride.map_url}
                            state={ride.state}
                            city={ride.city}
                        />);
                }):<></>}
            {props.selectBtn === 2 ? rides.map((ride)=>{
                    return (<Upcoming 
                            station={props.station} 
                            id={ride.id}
                            origin={ride.origin_station_code}
                            path={ride.station_path}
                            date={ride.date}
                            map={ride.map_url}
                            state={ride.state}
                            city={ride.city}
                        />);
                }):<></>}
            {props.selectBtn === 3 ? rides.map((ride)=>{
                    return (<Past 
                            station={props.station} 
                            id={ride.id}
                            origin={ride.origin_station_code}
                            path={ride.station_path}
                            date={ride.date}
                            map={ride.map_url}
                            state={ride.state}
                            city={ride.city}
                        />);
                }):<></>}
        </div>
    );
    
}

export default Rides;