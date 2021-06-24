import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';

class CreateArticle extends Component {

    url = Global.url;
    titleRef = React.createRef();
    contentRef = React.createRef();

    state = {
        article: {},
        status: null,
        selectedFile: null
    }

    componentWillMount() {
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido'
            }
        });
    }

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
            }
        });

        this.validator.showMessages();
        this.forceUpdate();


    }

    saveArticle = (e) => {
        e.preventDefault();

        this.changeState();

        if (this.validator.allValid()) {
            axios.post(this.url + 'save', this.state.article)
                .then(res => {
                    if (res.data.article) {
                        this.setState({
                            article: res.data.article,
                            status: 'waiting'
                        });

                        swal(
                            'Articulo creado',
                            'El articulo ha sido creado correctamente',
                            'success'
                        )

                        if (this.state.selectedFile !== null) {
                            var articleId = this.state.article._id;
                            const formData = new FormData();

                            formData.append(
                                'file0',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            );

                            axios.post(this.url + 'upload-image/' + articleId, formData)
                                .then(res => {
                                    if (res.data.article) {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'success'
                                        });
                                    } else {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'failed'
                                        });
                                    }
                                });

                        } else {
                            this.setState({
                                status: 'success'
                            });
                        }



                    } else {
                        this.setState({
                            status: 'failed'
                        });
                    }
                });
        }else{
            this.setState({
                status: 'failed'
            });
            this.validator.showMessages();
            this.forceUpdate();
        }

    }

    fileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        });
    }
    render() {

        if (this.state.status === 'success') {
            return <Redirect to="/blog" />;
        }

        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Crear Articulo</h1>

                    <form className="mid-form" onSubmit={this.saveArticle}>
                        <div className="form-group">
                            <label htmlFor="title">Titulo</label>
                            <input type="text" name="title" ref={this.titleRef} onChange={this.changeState} />

                            {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}
                        </div>
                        <div>
                            <label htmlFor="content">Contenido</label>
                            <textarea type="text" name="content" ref={this.contentRef}></textarea>
                            {this.validator.message('title', this.state.article.content, 'required')}
                        </div>

                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0" onChange={this.fileChange} />
                        </div>

                        <input type="submit" value="Guardar" className="btn btn-success" />

                    </form>
                </section>

            </div>
        )
    }

}

export default CreateArticle;
