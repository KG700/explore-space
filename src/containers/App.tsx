import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as actionCreators from '../store/actions';
import { IState, SpaceShips } from '../store/reducer';
import SpaceShipList from '../components/SpaceShipList';

import './App.css';

type Props = {
  selected: SpaceShips,
  selectedRocket: any,
  showRockets: () => void,
  showDragons: () => void,
  onSelectedRocket: (arg0: string) => void
}

class App extends Component<Props> {

  render () {
    
    return (
      <div className="App">
        <button onClick={this.props.showRockets}>Rockets</button>
        <button onClick={this.props.showDragons}>Dragons</button>
        <SpaceShipList />
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    selected: state.selected,
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
