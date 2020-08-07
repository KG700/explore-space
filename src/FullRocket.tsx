import React, { Component } from 'react';
import axios from 'axios';

type Props = {
    id: string
}

type State = {
    rocket: {
        rocket_id: string
    }
}

class FullRocket extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      rocket: {
          rocket_id: ""
      }
    }
  }

  componentDidUpdate () {
    if (this.props.id) {
        if (this.state.rocket && this.state.rocket.rocket_id !== this.props.id){
            axios.get('/rockets/' + this.props.id)
                .then(response => {
                    this.setState({ rocket: response.data });
                });
        }
    }
  }

 render () {
     console.log('[FullRocket]' + this.props.id)
     return (
        <h1>Hello</h1>
     )
 }   
}

export default FullRocket;