import React from 'react';
import { connect } from 'react-redux';

import { IState } from '../../store/reducer';

type Props = {
    dragon: any,
}

const DragonDetails = ({ dragon }: Props) => {
    return (
        <div>
            <h1>{dragon.name}</h1>
            <p>{dragon.description}</p>
            <h2>Quick Facts:</h2>
        </div>
    )  
}

const mapStateToProps = (state: IState) => {
    return {
      dragon: state.selectedDragon
    };
  }

export default connect(mapStateToProps)(DragonDetails);