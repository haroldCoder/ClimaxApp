import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconsClimax from "./icons-clima";

const WeatherInfo = (props) =>{
    return (
        <div className="card card-body d-flex" id="infoclima" style={{backgroundColor: "#00000010", height: "90vh", justifyContent: "space-evenly"}}>
            {
                props.state.city != false?
                <>
                    <h3> Location: {props.state.city}, {props.state.country}</h3>
                    <h3> Temperature: {props.state.temperature} ℃, {props.state.description}</h3>
                    <h3> Humidity: {props.state.humidity}</h3>
                    <h3> Wind Speed: {props.state.wind_speed}</h3>
                </>
                : <h2 style={{textAlign: "center"}}>NULL DATA</h2>
            }
            <div className="d-flex">
                <IconsClimax stade={props.state.description} />
            </div>      
        </div>
    )
}
export default WeatherInfo;