import React, { Component } from 'react';
import ItemProducto from './ItemProducto'
class Productos extends Component {
  render() {
    const {listaProductos} = this.props
    return (
      <div>
        <h1>Productos</h1>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Categoria</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              listaProductos.map((item) => {
                return (
                  <ItemProducto
                  reloadProductos = {this.props.reloadProductos}
                  key={item.id} producto={item}/>
                )
              })
            }
            
          </tbody>
        </table>
  </div>
    );
  }
}

export default Productos;