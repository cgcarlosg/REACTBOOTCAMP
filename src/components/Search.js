import React, { Component } from 'react';
import Slider from './Slider';

import Articles from './Articles';


class Search extends Component {

    render() {

        var searched = this.props.match.params.search;
        return (
            <div id="blog">
                <Slider
                    title={"Busqueda: "+searched}
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        {/*Listado de articulos que vendran del Api rest Node*/}
                        <Articles
                        search = {searched} />
                    </div>

             
                </div>
            </div>
        )
    }

}

export default Search
