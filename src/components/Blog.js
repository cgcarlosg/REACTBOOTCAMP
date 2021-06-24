import React, { Component } from 'react';
import Slider from './Slider';

import Articles from './Articles';


class Blog extends Component {

    render() {
        return (
            <div id="blog">
                <Slider
                    title="Blog"
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                     
                        <Articles />
                    </div>


             
                </div>
            </div>
        )
    }

}

export default Blog
