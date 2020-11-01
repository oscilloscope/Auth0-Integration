import React, { Component } from 'react';

class Public extends Component {
  state = {
    message: '',
  };
  componentDidMount() {
    fetch('/public')
      .then((response) => {
        console.log('this is resposne');
        console.log(response);
        if (response.ok) return response.json();
        throw new Error('Network Connection Error');
      })
      .then((response) => this.setState({ message: response.message }))
      .catch((err) => this.setState({ message: err.message }));
  }

  render() {
    console.log(this.state.message);
    console.log('Hello world');
    return <p>{this.state.message}</p>;
  }
}

export default Public;