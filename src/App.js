import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/Header';
import Productos from './components/Productos';
import axios from 'axios'
import Formulario from './components/Formulario';
class App extends React.Component {
  state = {
    listaProductos: []
  }
  componentDidMount(){
    this.getProductos();
  }
  getProductos = async ()=> {
    const resultado = await axios.get('http://localhost:4000/restaurant');
    this.setState({listaProductos: resultado.data})
  }
  getProducto = (id) => {
    console.log(id);
    const idProducto = parseInt(id);
    console.log(idProducto);
    const producto = this.state.listaProductos.filter(producto => producto.id ===idProducto);
    return producto[0];
  }
  render(){
    return (
      <Router>
        <Header/>
        <main className="container">
          <Switch>
            <Route exact path="/productos/nuevo" 
              render= {
                (props)=>(
                  <Formulario reloadProductos = {this.getProductos}
                  {...props}/>
                )
              }></Route>
            <Route exact path="/">
              <Redirect to="/productos"></Redirect>
            </Route>

            <Route 
              exact 
              path="/productos" 
              render={
                ()=>(
                  <Productos 
                    reloadProductos = {this.getProductos}
                    listaProductos={this.state.listaProductos}/>)}>
            </Route>
            <Route
              exact
              path="/productos/editar/:id"
              render={(props) => {
                return (
                  <Formulario
                    reloadProductos = {this.getProductos}
                    producto = {this.getProducto(props.match.params.id)}
                    {...props}
                  />
                )
              }}
            >

            </Route>
          </Switch>
        </main>
      </Router>
      );
  }
  
}

export default App;
