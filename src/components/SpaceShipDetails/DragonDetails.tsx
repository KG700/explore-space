import React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import * as actionCreators from '../../store/actions';

import { IState } from '../../store/reducer';
import { Modal, Button } from 'antd';

type Props = {
    dragon: any,
    isVisible: boolean
}

const DragonDetails = ({ dragon, isVisible }: Props) => {
    return (
        <div>
            <Modal
                title={dragon.name}
                visible={isVisible}
                // onOk={this.handleOk}
                // onCancel={this.handleCancel}
            >
                <p>{dragon.description}</p>
            </Modal>
            {/* {
                Object.keys(dragon).length > 0
                &&
                
                <div>
                    <h1>{dragon.name}</h1>
                    <p>{dragon.description}</p>
                    <h2>Quick Facts:</h2>
                </div>
            } */}
        </div>
    )  
}

const mapStateToProps = (state: IState) => {
    return {
        dragon: state.selectedDragon,
        isVisible: state.isVisibleDragonDetail
    };
  }

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, void, Action>) => {
    return {
        onClickVisible: () => dispatch(actionCreators.visibleDragonDetail()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DragonDetails);