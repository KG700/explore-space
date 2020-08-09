import React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import * as actionCreators from '../../store/actions';

import { IState } from '../../store/reducer';
import { Modal} from 'antd';

type Props = {
    rocket: any,
    isVisible: boolean,
    onClickNotVisible: () => void
}

const RocketDetails = ({ rocket, isVisible, onClickNotVisible }: Props) => {
    return (
        <div>
            <Modal
                title={rocket.rocket_name}
                visible={isVisible}
                cancelButtonProps={{ style: { display: 'none' } }}
                destroyOnClose={true}
                onOk={onClickNotVisible}
                onCancel={onClickNotVisible}
            >
                <p>{rocket.description}</p>
            </Modal>
        </div>
    )  
}

const mapStateToProps = (state: IState) => {
    return {
      rocket: state.selectedRocket,
      isVisible: state.isVisibleRocketDetail
    };
  }

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, void, Action>) => {
    return {
        onClickNotVisible: () => dispatch(actionCreators.hideRocketDetail()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RocketDetails);