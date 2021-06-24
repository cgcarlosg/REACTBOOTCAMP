import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Global from '../Global';
import Moment from 'react-moment';
import 'moment/locale/es';
import Imagedefault from '../assets/images/nothing-impossible.jpg';
class Article extends Component {

    url = Global.url;

    state = {
        article: false,
        status: null
    };

    componentWillMount() {
        this.getArticle();
    }

    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article,
                    status: 'success'
                });
            }).catch(err => {
                this.setState({
                    article: false,
                    status: 'success'
                });
            });
    }

    deleteArticle = (id) => {

        swal({
            title: "Esta seguro?",
            text: "Una vez borrado no se podra recuperar el articulo",
            icon: "warning",
            buttons: true,
            dangerMode: true
        })
            .then((willDelete) => {

                if (willDelete) {
                    axios.delete(this.url + 'article/' + id)
                        .then(res => {
                            this.setState({
                                article: res.data.article,
                                status: 'deleted'
                            });

                            swal(
                                'Articulo eliminado',
                                'El articulo ha sido borrado correctamente'
                            );
                        });
                } else {
                    swal("Articulo se mantiene!");
                }

            });



    }

    render() {

        if (this.state.status === 'deleted') {
            return <Redirect to="/blog" />
        }

        var article = this.state.article;
        return (
            <div className="center">
                <section id="content">

                    {this.state.article &&
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                                {
                                    article.image !== null ? (
                                        <img src={this.url + 'get-image/' + article.image} alt={article.title} />
                                    ) : (
                                        <img src={Imagedefault} alt={article.title} />
                                    )
                                }
                            </div>

                            <h1 className="subheader">{article.title}</h1>
                            <span className="date">
                                <Moment locale="es" fromNow>{article.date}</Moment>
                            </span>
                            <p>
                                {article.content}
                            </p>

                            <button onClick={
                                () => {
                                    this.deleteArticle(article._id)
                                }
                            }

                                className="btn btn-danger">Eliminar</button>
                            <Link to={"/blog/editar/"+article._id } className="btn btn-warning">Editar</Link>


                            <div className="clearfix"></div>
                        </article>
                    }



                    {this.state.article == null &&
                        <div id="article">
                            <h2 className="subheader">Cargando...</h2>
                            <p>Espera unos segundos</p>
                        </div>
                    }


                </section>

            </div>
        );
    }

}

export default Article
