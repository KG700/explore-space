import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Rocket from './Rocket';
import FullRocket from './FullRocket';

import './App.css';

type Props = {
  rockets: any[],
}

type AppState = {
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
        });
  };

  rocketSelectedHandler = (id: string) => {
    this.setState({ selectedRocket: id });
  }

  render () {
    const rockets = this.props.rockets.map(rocket => {
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

const mapStateToProps = state => {
  return {
    rockets: state.rockets
  };
}

export default connect(mapStateToProps)(App);
