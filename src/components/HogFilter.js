import React, { Component } from 'react';
export default class HogFilter extends Component {

    render(){
        return(
        <div>
        <button value={this.props.filterTerm} onClick={e =>{
            this.props.onFilter()
        }}></button>
        </div>
        )
    }

}