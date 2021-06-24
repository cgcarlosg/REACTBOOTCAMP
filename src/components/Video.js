import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Video extends Component {

    marcar = () => {
        this.props.marcarFavorito(this.props.video, this.props.indice);
    }
    render(){
        
        const {titulo, image} = this.props.video;

        return (
            <article className="article-item" id="article-template">
            <div className="image-wrap">
                <img src={image} alt={titulo} />
            </div>

            <h2>{titulo}</h2>
            <span className="date">
                Hace 5 minutos
            </span>
            <Link to="/blog">Leer más</Link>
            <button onClick={this.marcar}>
                Marcar como favorito
                </button>

            <div className="clearfix"></div>
        </article>

        )

    }
}

export default Video
