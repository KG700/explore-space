import React from 'react';
import { connect } from 'react-redux';

import { IState } from '../../store/reducer';
import { Modal} from 'antd';

type Props = {
    rocket: any,
    isVisible: boolean,
}

const RocketDetails = ({ rocket, isVisible }: Props) => {
    return (
        <div>
            <Modal
                title={rocket.rocket_name}
                visible={isVisible}
                cancelButtonProps={{ style: { display: 'none' } }}
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

export default connect(mapStateToProps)(RocketDetails);