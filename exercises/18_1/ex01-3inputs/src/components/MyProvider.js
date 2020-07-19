import React, { Component } from 'react';
import MyContext from './MyContext';

class MyProvider extends Component {
  state = {
    input1: '',
    input2: '',
    input3: '',
  };

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        insertNum1: (event) => this.setState({ input1: event.target.value }),
        insertNum2: (event) => this.setState({ input2: event.target.value }),
        insertNum3: (event) => this.setState({ input3: event.target.value }),
        sum: () => {parseFloat(this.state.input1) + parseFloat(this.state.input2) + parseFloat(this.state.input3)},
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider;
