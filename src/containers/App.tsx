import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as actionCreators from '../store/actions';
import { IState } from '../store/reducer';
import Rocket from '../components/Rocket';
import FullRocket from '../components/FullRocket';

import './App.css';

type Props = {
  rockets: any[],
  selectedRocket: any,
  showRockets: () => void,
  showDragons: () => void,
  onSelectedRocket: (arg0: string) => void
}

class App extends Component<Props> {

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
        <button onClick={this.props.showDragons}>Dragons</button>
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
    dragons: state.dragons,
    selectedRocket: state.selectedRocket
  };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, void, Action>) => {
  return {
    showRockets: () => dispatch(actionCreators.showRockets()),
    showDragons: () => dispatch(actionCreators.showDragons()),
    onSelectedRocket: (id: string) => dispatch(actionCreators.select(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
