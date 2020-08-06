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
    console.log(this.props.id)
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
     return <h1>{ this.props.id }</h1>
 }   
}

export default FullRocket;