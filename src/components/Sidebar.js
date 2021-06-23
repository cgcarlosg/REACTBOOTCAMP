import React, { Component } from 'react';
class Sidebar extends Component {

    searchRef = React.createRef();

    redirectToSearch = (e) => {
        e.preventDefault();
        alert('hi');
    }

    render() {
        return (

            <aside id="sidebar">
             
                <div id="nav-blog" className="sidebar-item">
                    <h3>Puedes hacer esto</h3>
                    <a href="#" className="btn btn-success">Crear artículo</a>
                </div>

                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el artículo que buscas</p>
                    <form onSubmit= {this.redirectToSearch}>
                        <input type="text" name="search" ref={this.searchRef}/>
                        <input type="submit" name="submit" value="Buscar" class="btn" />
                    </form>
                </div>

            </aside>

        )
    }

}

export default Sidebar
