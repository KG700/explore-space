import React, { Component } from 'react';
import axios from 'axios';

import Rocket from './Rocket';
import FullRocket from './FullRocket';

import './App.css';

type AppState = {
  rockets: any[],
  selectedRocket: string | null
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
    axios.get('/rockets')
        .then(response => {
          this.setState({ rockets: response.data })
          // console.log(response);
        });
  };

  rocketSelectedHandler = (id: string) => {
    // console.log(`selected id: ${id}`)
    this.setState({ selectedRocket: id });
  }

  render () {
    const rockets = this.state.rockets.map(rocket => {
      console.log(rocket)
      return (
        <Rocket 
          id={rocket.id} 
          name={rocket.rocket_name}
          clicked={() => this.rocketSelectedHandler(rocket.rocket_id) }
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
