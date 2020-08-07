import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { IState } from './store/reducer';
import { Dispatch } from 'redux';
import axios from 'axios';

import Rocket from './Rocket';
import FullRocket from './FullRocket';

import './App.css';

type Props = {
  rockets: any[],
  selectedRocket: any,
  onSelectedRocket: (arg0: string) => void
}

interface IState {
    rockets: any[],
    selectedRocket: any
}

// type Dispatch<S> = Redux.Dispatch<S>;

// type State = {
// }

class App extends Component<Props> {

  // constructor(props: {}) {
  //   super(props);
  //   this.state = {
  //     rockets: [],
  //     selectedRocket: null
  //   }
  // }

  componentDidMount () {
    axios.get('/rockets')
        .then(response => {
          console.log(response.data)
          this.setState({ rockets: response.data })
        });
  };

  rocketSelectedHandler = (id: string) => {
    console.log('updating selected rocket')
    // this.setState({ selectedRocket: id });
  }

  render () {
    console.log('[App]' + this.props.selectedRocket)
    const rockets = this.props.rockets.map(rocket => {
      return (
        <Rocket 
          id={rocket.id} 
          name={rocket.rocket_name}
          clicked={() => this.props.onSelectedRocket(rocket.rocket_id) }
        />) 
      }
    )

    return (
      <div className="App">
        <ul>
          {rockets}
          {
            this.props.selectedRocket
            ?
              <FullRocket id={this.props.selectedRocket} />
            :
              null
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  console.log('[App] mapStateToProps ' + state)
  return {
    rockets: state.rockets,
    selectedRocket: state.selectedRocket
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onSelectedRocket: (id: string) => dispatch({ type: 'SELECT', id: id })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
