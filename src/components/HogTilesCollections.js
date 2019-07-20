import React, { Component } from 'react';
import HogTilesCards from './HogTilesCards.js'

export default class HogTilesCollections extends Component {

    state={
        hogTiles: [],
        filter:false

    }

    greasedPigs = () => {
        this.setState({
            filter: !this.state.filter
        })

    }

   

    componentDidMount(){
        fetch('http://localhost:3001/hogs')
        .then(response=>response.json())
        .then(result=>{
            this.setState({
                hogTiles: result 
            })
            
        })
    }

    render(){
        let filteredPigs = this.state.filter ? this.state.hogTiles.filter( hog => hog.greased) : this.state.hogTiles
        return(
            <div className = 'ui grid container'>
                <div>
                <button onClick={this.greasedPigs}>IsGreased{this.state.filter ? 'Yes' : 'No'}</button>
                </div>
            {filteredPigs.map(hogTile =>{
                    return(
                        <HogTilesCards name={hogTile.name} image={hogTile.image} specialty={hogTile.specialty} />
                    ) 
                })}
            </div>
        )
    }

}