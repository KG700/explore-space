import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as actionCreators from '../store/actions';
import { IState } from '../store/reducer';
import SpaceShipList from '../components/SpaceShipList';

import './App.css';

type Props = {
  showRockets: () => void,
  showDragons: () => void,
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

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, void, Action>) => {
  return {
    showRockets: () => dispatch(actionCreators.showRockets()),
    showDragons: () => dispatch(actionCreators.showDragons()),
  };
}

export default connect(null, mapDispatchToProps)(App);
