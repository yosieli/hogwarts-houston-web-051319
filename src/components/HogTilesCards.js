import React, { Component } from 'react';
import HogDetails from './HogDetails.js'

export default class HogTilesCards extends Component {
    state={
        showDetail: false
    }

    handleClick = () => {
        console.log('hi')
        this.setState({
            showDetail: true
        })
    }
    

    render(){

        return(
            <div className= "ui eight wide column">
              <h1>{this.props.name}</h1>
              <img src={this.props.image} alt= "" onClick={this.handleClick}/> 
              {this.state.showDetail ? <HogDetails name={this.props.name}  specialty={this.props.specialty} /> : null }
            </div>
        )
    }

}