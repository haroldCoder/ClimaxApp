import React, {Component} from "react";
import ReactDOM from "react-dom";
import WeatherInfo from "./components/WeatherInfo";
import WeatherForm from "./components/WeatherForm";
import { WEATHER_KEY } from './keys.js'
import axios from "axios";
import IconsClimax from "./components/icons-clima";
import $ from 'jquery';

class App extends Component{
  state = {
    temperature: '',
    description: '',
    humidity: '',
    wind_speed: '',
    city: '',
    country: '',
    error: null
  };
  componentDidMount(){
    this.SettingDate();
  }
  componentDidUpdate(){
    this.SettingDate();
  }
  SettingDate = () =>{
    let date = new Date();
    let hours = date.getHours();
    if (hours > 18){
      $("body").css("background", "linear-gradient(rgba(2,0,36,1) 20%, rgba(0,0,0,1), rgba(100,100,100,1) 70%, rgba(245, 245, 245, 1))");
      $(".btn").css("background", "rgba(2,0,36,1)");
      $(".info").css("background", "#08042ecc");
    }
    else{
      
    }
  }
  getWeather = async(e) =>{
  e.preventDefault();
  const { city, country } = e.target.elements;
  const cityValue = city.value;
  const countryValue = country.value;
  if(cityValue && country){
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
    const res = await axios.get(API_URL);
    console.log(res.data);
    const data = res.data;
    this.setState({
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      city: data.name,
      country: data.sys.country,
      error: null
    });
  }
  else{
    this.setState({error: 'error please enter city and a country'})
  }
  
  
}

 render(){
  return (
    <div className="container p-4">
            <div className="row d-flex">
              <div className="col-md-4" style={{width: "45%"}}>
                  <WeatherForm getWeather={this.getWeather}/>
              </div>
              <div className="card info col-md-4 mx-auto m-2" style={{background: "#02001610", width: "40%"}}>
                <WeatherInfo state={this.state}/>
              </div>
            </div>
        </div>
  );
}
}


export default App;
