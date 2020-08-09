import React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import * as actionCreators from '../../store/actions';

import { IState } from '../../store/reducer';
import { Modal, Statistic, Row, Col, Divider } from 'antd';

type Props = {
    dragon: any,
    isVisible: boolean,
    onClickNotVisible: () => void
}

const DragonDetails = ({ dragon, isVisible, onClickNotVisible }: Props) => {
    return (
        <div>
            { Object.keys(dragon).length > 0 &&
                <Modal
                    title={dragon.name}
                    visible={isVisible}
                    cancelButtonProps={{ style: { display: 'none' } }}
                    destroyOnClose={true}
                    onOk={onClickNotVisible}
                    onCancel={onClickNotVisible}
                >
                        <Row gutter={16}>
                            <Col span={8}>
                                <Statistic 
                                    title="First Flight" value={dragon.first_flight}
                                />
                            </Col>
                            <Col span={8}>
                                <Statistic 
                                    title="Height (with trunk)" value={dragon.height_w_trunk.meters + 'm'}
                                />
                            </Col> 
                            <Col span={8}>
                                <Statistic 
                                    title="Dry Mass" value={dragon.dry_mass_kg + 'kg'}
                                />
                            </Col> 
                        </Row>
                    
                        <Divider />
                    <p>{dragon.description}</p>
                </Modal>
            }
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