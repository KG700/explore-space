import React, { Component } from 'react';
import axios from 'axios';

import Rocket from './Rocket';

import './App.css';

class App extends Component<{}, { rockets: any[] }> {

  constructor(props: {}) {
    super(props);
    this.state = {
      rockets: []
    }
  }

  componentDidMount () {
    axios.get('https://api.spacexdata.com/v3/rockets')
        .then(response => {
          this.setState({ rockets: response.data })
          // console.log(response);
        });
  };

  render () {
    const rockets = this.state.rockets.map(rocket => {
      return (<Rocket id={rocket.id} name={rocket.rocket_name} />) 
      }
    )
    return (
      <div className="App">
        <ul>
          {rockets}
        </ul>
      </div>
    );
  }
}

export default App;
