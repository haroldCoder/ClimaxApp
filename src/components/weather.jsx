import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Weather extends Component{
    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: '',
        city: '',
        country: '',
        error: null
    }
    render(){
        this.setState({"temperature": this.props.temp});
        this.setState({"description": this.props.desc});
        this.setState({"humidity": this.props.humi});
        this.setState({"wind_speed": this.props.wind});
        this.setState({"city": this.props.city});
        this.setState({"country": this.props.country});
        return(
            <h2>hello</h2>
        )
    }
}