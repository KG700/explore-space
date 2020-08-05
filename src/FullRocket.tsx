import React, { Component } from 'react';

type Props = {
    id: number
}

type State = {
    rocket: {},
}

class FullRocket extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      rocket: {}
    }
  }

 render () {
     return <h1>{ this.props.id }</h1>
 }   
}

export default FullRocket;