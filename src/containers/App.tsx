import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import * as actionCreators from '../store/actions';
import { IState } from '../store/reducer';
import SpaceShipList from '../components/SpaceShipList';
import SpaceShipDetails from '../components/SpaceShipDetails/SpaceShipDetails';
import { Button, Row, Col } from 'antd';
import { Layout, Menu } from 'antd';

import DragonDetails from '../components/SpaceShipDetails/DragonDetails';
import RocketDetails from '../components/SpaceShipDetails/RocketDetails';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;

type Props = {
  showRockets: () => void,
  showDragons: () => void,
}

class App extends Component<Props> {

  render () {
    
    return (
      <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      {/* <div className="logo" /> */}
      <div className="logo-container"><h1>Explore Space</h1></div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" onClick={this.props.showRockets}>
          🚀 Rockets
        </Menu.Item>
        <Menu.Item key="2" onClick={this.props.showDragons}>
          🛰 Dragons
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          <SpaceShipList />
        </div>
        <RocketDetails />
        <DragonDetails />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Data from API: Space X</Footer>
    </Layout>
  </Layout>

    );
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IState, void, Action>) => {
  return {
    showRockets: () => dispatch(actionCreators.showRockets()),
    showDragons: () => dispatch(actionCreators.showDragons()),
  };
}

export default connect(null, mapDispatchToProps)(App);
