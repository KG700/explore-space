import React, { Component } from 'react';
import { connect } from 'react-redux';

import { IState } from '../store/reducer';

type Props = {
    rocket: any,
}

class FullRocket extends Component<Props> {

 render () {
     return (
        <div>
            <h1>{this.props.rocket.rocket_name}</h1>
            <p>{this.props.rocket.description}</p>
            <h2>Quick Facts</h2>
     <p>Cost per launch: ${this.props.rocket.cost_per_launch}</p>
        </div>
     )
 }   
}

const mapStateToProps = (state: IState) => {
    return {
      rocket: state.selectedRocket
    };
  }

export default connect(mapStateToProps)(FullRocket);