import React from 'react';
import { Provider } from 'react-redux'

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import WelcomeMessage from './WecomeMessage';
// import { Layout, Menu } from 'antd';

configure({adapter: new Adapter()});

const mockStore = configureStore();
const mockDispatchfn = jest.fn();

describe('WelcomeMessage', () => {

  let wrapper: any;

  // const props: any = {
  //   showRockets: jest.fn(),
  //   showDragons: jest.fn(),
  // }

  beforeEach(() => {
    wrapper = shallow(<WelcomeMessage />)
  })

  it('displays when rockets and dragons are not selected, () => {
    expect(wrapper).toBeVisible();
  })

})