import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogtilesCollections from './HogTilesCollections.js'


class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          <HogtilesCollections/>

      </div>
    )
  }



}

export default App;
