import React, { Component } from 'react';
import axios from 'axios';

import Rocket from './Rocket';
import FullRocket from './FullRocket';

import './App.css';

type AppState = {
  rockets: any[],
  selectedRocket: number | null
}

class App extends Component<{}, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      rockets: [],
      selectedRocket: null
    }
  }

  componentDidMount () {
    axios.get('https://api.spacexdata.com/v3/rockets')
        .then(response => {
          this.setState({ rockets: response.data })
          // console.log(response);
        });
  };

  rocketSelectedHandler = (id: number) => {
    // console.log(`selected id: ${id}`)
    this.setState({ selectedRocket: id });
  }

  render () {
    const rockets = this.state.rockets.map(rocket => {
      return (
        <Rocket 
          id={rocket.id} 
          name={rocket.rocket_name}
          clicked={() => this.rocketSelectedHandler(rocket.id) }
        />) 
      }
    )

    return (
      <div className="App">
        <ul>
          {rockets}
          {
            this.state.selectedRocket
            ?
              <FullRocket id={this.state.selectedRocket} />
            :
              null
          }
        </ul>
      </div>
    );
  }
}

export default App;
