import React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import * as actionCreators from '../../store/actions';

import { IState } from '../../store/reducer';
import { Modal, Statistic, Row, Col, Divider } from 'antd';

type Props = {
    rocket: any,
    isVisible: boolean,
    onClickNotVisible: () => void
}

const RocketDetails = ({ rocket, isVisible, onClickNotVisible }: Props) => {    
    return (
        <div>
            { Object.keys(rocket).length > 0 &&
                <Modal
                    title={rocket.rocket_name}
                    visible={isVisible}
                    cancelButtonProps={{ style: { display: 'none' } }}
                    destroyOnClose={true}
                    onOk={onClickNotVisible}
                    onCancel={onClickNotVisible}
                >
                    <Row gutter={16}>
                        <Col span={8}>
                            <Statistic 
                                title="Cost/launch" value={'$' + rocket.cost_per_launch/1000000 + 'm'}
                            />
                        </Col>
                        <Col span={8}>
                            <Statistic 
                                title="Height" value={rocket.height.meters.toFixed(0) + 'm'}
                            />
                        </Col> 
                        <Col span={8}>
                            <Statistic 
                                title="Mass" value={(rocket.mass.kg/1000).toFixed(0) + "t"}
                            />
                        </Col> 
                    </Row>
                    <Divider />
                    <Row gutter={16}>
                        <Col span={12}>
                            <Statistic 
                                title="First Flight" value={rocket.first_flight}
                            />
                        </Col>
                        <Col span={12}>
                            <Statistic 
                                title="Country" value={rocket.country}
                            />
                        </Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col span={24}>
                            <p>{rocket.description}</p>
                        </Col>
                    </Row>
                </Modal>
            }
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