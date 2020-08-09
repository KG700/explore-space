import React from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import * as actionCreators from '../../store/actions';
import { IState, SpaceShips } from '../../store/reducer';

import { Card } from 'antd';
import './SpaceShipList.css';

const { Meta } = Card

type Props = {
    selected: SpaceShips,
    rockets: any[],
    dragons: any[],
    onSelectedRocket: (arg0: string) => {}
    onSelectedDragon: (arg0: string) => {}
}

const SpaceShipList = ({ selected, rockets, dragons, onSelectedRocket, onSelectedDragon }: Props) => {
    let spaceShipList: JSX.Element[] | null;
    spaceShipList = null;
    switch ( selected ) {
      case SpaceShips.ROCKET:
        spaceShipList = rockets.map(rocket => {
          return (
            <li 
              onClick={() => onSelectedRocket(rocket.rocket_id) }> 
              <Card
                hoverable
                style={{ width: 300, margin: 10 }}
                cover={<img alt="rocket" src={rocket.flickr_images} />}
              >
                <Meta
                  title={rocket.rocket_name}
                />
                  
              </Card>
            </li>
          ) 
        })
        break;
      case SpaceShips.DRAGON:
        spaceShipList = dragons.map(dragon => {
          return (
            <li onClick={() => onSelectedDragon(dragon.id) }>
                <Card
                  hoverable
                  style={{ width: 300, margin: 10 }}
                  cover={<img alt="rocket" src={dragon.flickr_images} />}
                >
                  <Meta 
                    title={ dragon.name } 
                  />
              </Card>
            </li>
          ) 
        })
        break;
    };
    return (
        <div>
            {
                selected !== SpaceShips.BLANK
                ?
                <ul className="spaceship-list">
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
    onSelectedRocket: (id: string) => dispatch(actionCreators.selectedRocket(id)),
    onSelectedDragon: (id: string) => dispatch(actionCreators.selectedDragon(id))
};
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceShipList);