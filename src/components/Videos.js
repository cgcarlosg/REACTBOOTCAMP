import React, {Component} from 'react'
import Video from './Video';
class Videos extends Component {

    state={};
    

    cambiarTitulo = () => {

        var { videos } = this.state;
        videos[0].titulo = "Batman Begins";

        this.setState({
            videos: videos
        });
    }

    favorito = (video, indice) => {
        console.log("favorito marcado");
        this.setState({
            favorito: video,
            indice: indice
        })
    }

    componentWillMount(){
     //   alert("Se va a montar el componente");
        this.setState({
        videos: [
            { titulo: 'Batman vs Superman', image: 'https://i0.wp.com/www.lanota-latina.com/wp-content/uploads/2015/12/batman-vs-superman.jpg?fit=1335%2C873&ssl=1'},
            { titulo: 'Gran Torino', image: 'http://lgecine.org/wp-content/uploads/2010/11/gran-torino__-poster.jpg'},
            { titulo: 'looper', image: 'https://tel.img.pmdstatic.net/fit/https.3A.2F.2Fprd2-tel-epg-img.2Es3-eu-west-1.2Eamazonaws.2Ecom.2Fprogram.2Fa8b4e1738b016fba.2Ejpg/1200x630/crop-from/top/quality/80/cr/wqkgUHJpc21hIE1lZGlhIC8gVGhlIE1vdmllIERhdGFiYXNlIC8gVG91cyBkcm9pdHMgcsOpc2VydsOpcw%3D%3D/looper.jpg'}
        ],
        nombre: 'Carlos Gutierrez',
        favorito: {}
    });
    }

    componentDidMount(){
     //   alert("se ha montado el componente");
    }

    componentWillUnmount(){
    //    alert("me voy a desmontar");
    }

    render() {

        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        }

        var favorito;
        if (this.state.favorito.titulo) {
            favorito = (
                <p className="favorito" style={pStyle}>
                  <strong>El video favorito es: </strong>
                 <span>{this.state.favorito.titulo}</span>
                 </p>
             )
        } else {
            favorito = (
                <p>NO HAY VIDEO FAVORITO </p>
            )
        }

    return (
        <React.Fragment>
       
        <div className="center">
            <div id="content" className="videos">

                <h2 className="subheader">Listado de Videos</h2>
                <p>Listado de videos presentados en el Bootcamp. Autor {this.state.nombre} </p>
                <p><button onClick={this.cambiarTitulo}>Cambiar Titulo</button></p>
 
                {favorito} 


                <div id="articles" className="videos">
                { this.state.videos.map((video,i) => {
                        return (
                           
                            <Video 
                            key={i} 
                            video={video}
                            indice={i}
                            marcarFavorito={this.favorito} />
                        )
                    })
                  }
                </div>
            </div>

        

        </div>
        </React.Fragment>
    );
}
}

export default Videos
