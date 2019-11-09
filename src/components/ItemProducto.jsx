import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';


class ItemProducto extends Component {
  eliminarProducto = (id)=> {
    Swal.fire({
      title: 'Esta seguro?',
      text: "Un platillo eliminado no se puede recuperar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si eliminar',
      cancelButtonText: 'Cancelar',
    }).then( async (result) => {
      if (result.value) {
        try{
          const url =  `http://localhost:4000/restaurant/${id}`;
          const resultado = await axios.delete(url);
          if(resultado.status === 200) {
            Swal.fire(
              'Eliminado!',
              'El producto se a eliminado',
              'success'
            )
          }
          this.props.reloadProductos();
        } catch (error) {
          console.log(error)
        }
      }
    })
  }
  render() {
    const {id, nombrePlatillo, precioPlatillo, categoria} = this.props.producto;
    return (
      <tr>
        <th scope="row">{id}</th>
        <td>{nombrePlatillo}</td>
        <td>{categoria}</td>
        <td>S/. {precioPlatillo}</td>
        <td className="d-flex justify-content-around"> 
          <Link 
            to={`/productos/editar/${id}`}
            className="btn btn-warning">
            Editar
          </Link>
          <button
            onClick={()=> this.eliminarProducto(id)}
           className="btn btn-danger">
            Eliminar
          </button>
        </td>
      </tr>
    );
  }
}

export default ItemProducto;