import React, { Component } from 'react';

export default class HogDetails extends Component {

    render(){
        return(
          <div>
              <h3>Name:{this.props.name}</h3>
              <h3>Speciality:{this.props.specialty}</h3>
          </div>  
        )
    }

}
