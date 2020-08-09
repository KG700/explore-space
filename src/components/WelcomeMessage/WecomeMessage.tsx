import React from 'react';
import { connect } from 'react-redux';

import { IState, SpaceShips } from '../../store/reducer';
import './WelcomeMessage.css';

type Props = {
    selected: SpaceShips
}

const WelcomeMessage = ({ selected }: Props) => {
    return (
        <div>
            { selected === SpaceShips.BLANK 
                ?
                    <div className='welcome-container'>
                        <h2>Welcome to</h2>
                        <h1>Space Explorer!</h1>
                        <p>To get started, select a type of spaceship to find out more!</p>
                        <p style={{fontSize: '6vw'}}>🚀</p>
                    </div>
                :
                    null
            }
        </div>
    )  
}

const mapStateToProps = (state: IState) => {
    return {
        selected: state.selected
    };
  }

export default connect(mapStateToProps)(WelcomeMessage);