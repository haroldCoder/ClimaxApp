import React from 'react';

const WeatherForm = props => (
    <div className="card card-body" style={{background: "#00000010"}}>
        <form className='d-flex' style={{flexFlow: "column", justifyContent: "evenly"}} onSubmit={props.getWeather}>
            <div className="form-group mt-1">
                <input type="text" name="city" placeholder="Your City Name" className="form-control" autoFocus/>
            </div>
            <div className="form-group mt-4">
                <input type="text" name="country" placeholder="Your Country Name" className="form-control" />
            </div>
            <button className="btn btn-success w-100 mt-4">
                Get Weather
            </button>
        </form>
    </div>
);

export default WeatherForm;