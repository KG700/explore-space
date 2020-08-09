import React from 'react';
import { connect } from 'react-redux';

import { IState, SpaceShips } from '../../store/reducer';
import RocketDetails from './RocketDetails';
import DragonDetails from './DragonDetails';

type Props = {
    selected: SpaceShips
}

const SpaceShipDetails = ({ selected }: Props) => {
    return (
        <div>
            {
                selected === SpaceShips.ROCKET
                &&
                    <RocketDetails />
            }
            {
                selected === SpaceShips.DRAGON
                &&
                    <DragonDetails />
            }
        </div>
    )  
}

const mapStateToProps = (state: IState) => {
    return {
        selected: state.selected
    };
  }

export default connect(mapStateToProps)(SpaceShipDetails);