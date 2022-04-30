import React, {Component} from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import lluvia from '../clima icons/lluvia.png'
import nubes from '../clima icons/nubes.png';
import nubesn from '../clima icons/nubes nubado.png';
import neblina from '../clima icons/neblina.png';
import nublado from '../clima icons/nublado.png';
import soleado from '../clima icons/soleado.png';

class IconsClimax extends Component{
    componentDidMount(){
        this.Style()
    }
    componentDidUpdate(){
        this.Style()
    }
    render(){
        return(
            <>
            {
                this.props.stade == "drizzle" || this.props.stade == "light rain" || this.props.stade == "moderate rain" ? <img className="iconclim" src={lluvia} /> :
                 this.props.stade == "clear sky" || this.props.stade == "few clouds" ? <img className="iconclim" src={nubes} />: 
                 this.props.stade == "scattered clouds" ? <img className="iconclim" src={nubes} />: 
                 this.props.stade == "overcast clouds" ? <img className="iconclim" src={nubesn} />: 
                 this.props.stade == "broken clouds" ? <img className="iconclim" src={nubes} />: 
                 this.props.stade == "mist" || this.props.stade == "fog" ? <img className="iconclim" src={neblina} /> : 
                 this.props.stade == "foggy" ? <img className="iconclim" src={nublado} />: 
                 this.props.stade == "sunny" ? <img className="iconclim" src={soleado} />: null
            }
            </>
        )
    }
    Style = () =>{
        $(".iconclim").css("border-radius", "50%");
        $(".iconclim").css("margin-top", "20px");
        $(".iconclim").css("width", "120px");
        $(".iconclim").css("height", "120px");
        $(".iconclim").css("position","relative");
        $(".iconclim").css("left","35%")
        $(".iconclim").css("padding","5px");
    }
}
export default IconsClimax;