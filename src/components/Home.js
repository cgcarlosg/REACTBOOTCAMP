import React, {Component} from 'react';
import Slider from './Slider';
import Articles from './Articles';


class Home extends Component {

    render(){
        return (
            <div id="home">
            <Slider 
            title="Bienvenidos al Bootcamp de React 2021"
            btn="Ir al blog"
            size="Slider-big"
            />
            
            <div id="content">
                <h1 class="subheader">Ultimos artículos</h1>
                <Articles
                  home="true"
                />
            </div>
    
            </div>
        )
    }
    
}

export default Home
