import React, { Component } from 'react';

class Error extends Component {
  
  render() {
    const {mensaje} = this.props
    return (
      <div className="row justify-content-center">
      <p 
        className="alert col-md-6 alert-danger p3 my-2 text-center text-uppercase">
          {mensaje}</p>
    </div>
    );
  }
}

export default Error;