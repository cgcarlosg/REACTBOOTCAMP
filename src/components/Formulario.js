import React, { Component } from 'react';


class Formulario extends Component {

    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    generoHombreRef = React.createRef();
    generoMujerRef = React.createRef();
    generoOtroRef = React.createRef();

    state = {
        user: {}
    }

    recibirFormulario = (e) => {
        e.preventDefault();

        var genero = 'hombre';
        if(this.generoHombreRef.current.checked){
            genero = this.generoMujerRef.current.value;
        }else if(this.generoMujerRef.current.checked){
            genero = this.generoMujerRef.current.value;
        }else{
            genero = this.generoOtroRef.current.value
        }

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero
        }

        this.setState({
            user: user
        })
    }
    render() {

        if(this.state.user.nombre){
            var user = this.state.user;
        }

        return (
            <div id="formulario">
                
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Formulario</h1>

                            {this.state.user.nombre &&
                            <div id="user-data">
                                <p>Nombre: <strong>{user.nombre}</strong></p>
                                <p>Apellidos: <strong>{user.apellidos}</strong></p>
                                <p>Bio: <strong>{user.bio}</strong></p>
                                <p>Genero: <strong>{user.genero}</strong></p>
                            </div>
                        }





                    <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" ref={this.nombreRef} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type="text" name="apellidos"  ref={this.apellidosRef}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="bio">Biografia</label>
                            <textarea name="bio"  ref={this.bioRef}></textarea>
                        </div>

                        <div className="form-group radibuttons">
                            <input type="radio" name="genero" value="hombre"  ref={this.generoHombreRef}/> Hombre 
                            <input type="radio" name="genero" value="mujer"  ref={this.generoMujerRef}/> Mujer 
                            <input type="radio" name="genero" value="otro"  ref={this.generoOtroRef}/> Otro
                        </div>

                        <div className="clearfix"></div>

                        <input type="submit" value="Enviar" className="btn btn-success" />

                   </form>
                    </div>

             
                </div>
            </div>
        )
    }

}

export default Formulario
