import React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import * as actionCreators from '../../store/actions';

import { IState } from '../../store/reducer';
import { Modal} from 'antd';

type Props = {
    dragon: any,
    isVisible: boolean,
    onClickNotVisible: () => void
}

const DragonDetails = ({ dragon, isVisible, onClickNotVisible }: Props) => {
    return (
        <div>
            <Modal
                title={dragon.name}
                visible={isVisible}
                onOk={onClickNotVisible}
                destroyOnClose={true}
                cancelButtonProps={{ style: { display: 'none' } }}
                onCancel={onClickNotVisible}
            >
                <p>{dragon.description}</p>
            </Modal>
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
        onClickNotVisible: () => dispatch(actionCreators.hideDragonDetail()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DragonDetails);