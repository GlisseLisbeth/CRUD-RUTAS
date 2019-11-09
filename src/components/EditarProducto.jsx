import React, { Component } from 'react';

import Error from './Error';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import Swal from 'sweetalert2'

class EditarProducto extends Component {
  state = {
    producto: {
      nombrePlatillo: '',
      precioPlatillo: '',
      categoria: '',
    },
    error: false
  }

  componentDidMount() {
    console.log(this.props);
    this.setState({producto: this.props.producto});
  }


  handleChange = (e) => {
    this.setState({
      producto: {
        ...this.state.producto,
        [e.target.name]: e.target.value
      }
    })
  }

  editar = async(e)=> {
    e.preventDefault();
    const {nombrePlatillo, precioPlatillo, categoria, id} = this.state.producto;
    if(nombrePlatillo === '' || precioPlatillo === '' || categoria === '') {
      this.setState({error: true});
      return;
    }
    this.setState({error: false});

    // Editar del producto
    const url =  `http://localhost:4000/restaurant/${id}`;
    const {producto}= this.state;
    try{
      const resultado = await axios.put(url, {...producto});
      if(resultado.status === 200) {
        this.alerta();
        this.props.reloadProductos();
        this.props.history.push('/productos');
      }
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }
  }
  alerta = ()=> {
    Swal.fire(
      'Exito!',
      'Producto Editado correctamente',
      'success'
    )
  }
  render() {
    const {error}=this.state;
    return (
      <div>
        <h1 className="text-center">Editar Producto</h1>
        {error && <Error mensaje="Todos los campos son obligatorios"/>}
        <form className="mt-4" onSubmit={this.editar}>
          <div className="form-row justify-content-center">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Nombre</label>
              <input 
                type="text" 
                className="form-control" 
                name="nombrePlatillo"
                onChange = {this.handleChange}
                value= {this.state.producto.nombrePlatillo}
                placeholder="Nombre del platillo"/>
            </div>
          </div>
          <div className="form-row justify-content-center">
            <div className="form-group col-md-6">
              <label htmlFor="inputAddress">Precio</label>
              <input 
                type="number" 
                className="form-control"
                name="precioPlatillo"
                onChange = {this.handleChange}
                value= {this.state.producto.precioPlatillo}
                placeholder="Precio"/>
            </div>
          </div>
          <div className="form-row justify-content-center mt-3">
            <div className="form-check form-check-inline">
              <input 
                className="form-check-input" 
                type="radio" 
                name="categoria"
                onChange = {this.handleChange}
                checked = {this.state.producto.categoria === 'Postres'}
                value="Postres" />
              <label 
                className="form-check-label" 
                htmlFor="Postres">Postres</label>
            </div>
            <div className="form-check form-check-inline">
              <input 
                className="form-check-input" 
                type="radio" 
                name="categoria"
                onChange = {this.handleChange}
                checked = {this.state.producto.categoria === 'Bebidas'}
                value="Bebidas" />
              <label 
                className="form-check-label" 
                htmlFor="Bebidas">Bebidas</label>
            </div>
            <div className="form-check form-check-inline">
              <input 
                className="form-check-input" 
                type="radio" 
                name="categoria"
                onChange = {this.handleChange}
                checked = {this.state.producto.categoria === 'Cortes'}
                value="Cortes" />
              <label 
                className="form-check-label" 
                htmlFor="Cortes">Cortes</label>
            </div>
            <div className="form-check form-check-inline">
              <input 
                className="form-check-input" 
                type="radio" 
                name="categoria"
                onChange = {this.handleChange}
                checked = {this.state.producto.categoria === 'Ensaladas'}
                value="Ensaladas" />
              <label 
                className="form-check-label" 
                htmlFor="Ensaladas">Ensaladas</label>
            </div>
          </div>
          <div className="form-row justify-content-center mt-4">
            <button  
              type="submit" 
              className="btn btn-primary col-md-6">Agregar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(EditarProducto);