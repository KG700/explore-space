import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as actionCreators from '../store/actions';
import { IState, SpaceShips } from '../store/reducer';
import SpaceShipList from '../components/SpaceShipList';
import FullRocket from '../components/FullRocket';

import './App.css';

type Props = {
  selected: SpaceShips,
  rockets: any[],
  dragons: any[],
  selectedRocket: any,
  showRockets: () => void,
  showDragons: () => void,
  onSelectedRocket: (arg0: string) => void
}

class App extends Component<Props> {

  render () {
    let spaceShipList: JSX.Element[] | JSX.Element;
    switch ( this.props.selected) {
      case SpaceShips.ROCKET:
        spaceShipList = this.props.rockets.map(rocket => {
          return (
            <SpaceShipList 
              key={rocket.id}
              id={rocket.id} 
              name={rocket.rocket_name}
              clicked={() => this.props.onSelectedRocket(rocket.rocket_name) }
            />
          ) 
        })
        break;
      case SpaceShips.DRAGON:
        spaceShipList = this.props.dragons.map(dragon => {
          return (
            <SpaceShipList 
              key={dragon.id}
              id={dragon.id} 
              name={dragon.name}
              clicked={() => {} }
            />
          ) 
        })
        break;
      case SpaceShips.BLANK:
        spaceShipList = <p>Select a type of spaceship to find out more</p>
        break;
    };

    return (
      <div className="App">
        <button onClick={this.props.showRockets}>Rockets</button>
        <button onClick={this.props.showDragons}>Dragons</button>
        <ul>
            { spaceShipList }
          {
            this.props.selected === SpaceShips.ROCKET
            ?
              <FullRocket />
            :
            this.props.selected === SpaceShips.DRAGON
            ?
              null
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
