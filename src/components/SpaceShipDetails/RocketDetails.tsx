import React from 'react';
import { connect } from 'react-redux';

import { IState } from '../../store/reducer';

type Props = {
    rocket: any,
}

const RocketDetails = ({ rocket }: Props) => {
    return (
        <div>
            <h1>{rocket.rocket_name}</h1>
            <p>{rocket.description}</p>
            <h2>Quick Facts</h2>
            <p>Cost per launch: ${rocket.cost_per_launch}</p>
        </div>
    )  
}

const mapStateToProps = (state: IState) => {
    return {
      rocket: state.selectedRocket
    };
  }

export default connect(mapStateToProps)(RocketDetails);