import React from 'react';
import { Provider } from 'react-redux'

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import App from './App';
import WelcomeMessage from '../components/WelcomeMessage/WecomeMessage';
import { Layout, Menu } from 'antd';

configure({adapter: new Adapter()});

const mockStore = configureStore();
const mockDispatchfn = jest.fn();

describe('App', () => {

  let wrapper: any;

  const props: any = {
    showRockets: jest.fn(),
    showDragons: jest.fn(),
  }

  beforeEach(() => {
    wrapper = mount(
        <Provider store={mockStore()}>
            <App {...props} dispatch={mockDispatchfn} />
        </Provider>
        );;
  })

  it('contains WelcomeMessage when loaded', () => {
    //   expect(wrapper).toBeDefined();
    // console.log(wrapper);
    // expect(wrapper.find(Layout)).toHaveLength(1);
  })

})