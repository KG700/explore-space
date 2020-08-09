import React from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import * as actionCreators from '../store/actions';
import { IState, SpaceShips } from '../store/reducer';

type Props = {
    selected: SpaceShips,
    rockets: any[],
    dragons: any[],
    // onSelectedRocket: (event: React.MouseEvent<HTMLElement>) => void
    onSelectedRocket: (arg0: string) => {}
}

const SpaceShipList = ({ selected, rockets, dragons, onSelectedRocket }: Props) => {
    let spaceShipList: JSX.Element[] | null;
    spaceShipList = null;
    switch ( selected ) {
      case SpaceShips.ROCKET:
        spaceShipList = rockets.map(rocket => {
          return (
            <li onClick={() => onSelectedRocket(rocket.rocket_id) } > { rocket.rocket_name } </li>
          ) 
        })
        break;
      case SpaceShips.DRAGON:
        spaceShipList = dragons.map(dragon => {
          return (
            <li> { dragon.name } </li>
          ) 
        })
        break;
    };
    return (
        <div>
            {
                selected !== SpaceShips.BLANK
                ?
                <ul>
                    {spaceShipList}
                </ul>
                :
                null
            }
        </div>
    )
    
    ;
};

const mapStateToProps = (state: IState) => {
    return {
      selected: state.selected,
      rockets: state.rockets,
      dragons: state.dragons
    };
  }

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, void, Action>) => {
return {
    onSelectedRocket: (id: string) => dispatch(actionCreators.select(id))
};
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceShipList);