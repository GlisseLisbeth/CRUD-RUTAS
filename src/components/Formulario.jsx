import React, { Component, Fragment } from 'react';
import AgregarProducto from './AgregarProducto';
import EditarProducto from './EditarProducto';

class Formulario extends Component {
    render() {
        return (
            <Fragment>
                {this.props.match.path === '/productos/editar/:id' ? 
                <EditarProducto 
                    reloadProductos = {this.props.reloadProductos}
                    producto = {this.props.producto}
                />
                :
                <AgregarProducto 
                    reloadProductos = {this.props.reloadProductos}/>
                }
            </Fragment>
        );
    }
}

export default Formulario;