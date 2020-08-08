import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';

import { IState } from '../store/reducer';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import Rocket from '../components/Rocket';
import FullRocket from '../components/FullRocket';

import './App.css';

type Props = {
  rockets: any[],
  selectedRocket: any,
  showRockets: () => void,
  onSelectedRocket: (arg0: string) => void
}

class App extends Component<Props> {

  componentDidMount () {

  };

  render () {
    const rockets = this.props.rockets.map(rocket => {
      return (
        <Rocket 
          key={rocket.id}
          id={rocket.id} 
          name={rocket.rocket_name}
          clicked={() => this.props.onSelectedRocket(rocket.rocket_name) }
        />) 
      }
    )

    return (
      <div className="App">
        <button onClick={this.props.showRockets}>Rockets</button>
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
  return {
    rockets: state.rockets,
    selectedRocket: state.selectedRocket
  };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, void, Action>) => {
  return {
    showRockets: () => dispatch(actionCreators.showRockets()),
    onSelectedRocket: (id: string) => dispatch(actionCreators.select(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);