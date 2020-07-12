import React, { Component } from 'react';

class Inputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input1: '',
      input2: '',
      input3: '',
    };

    this.insertNum1 = this.insertNum1.bind(this);
    this.insertNum2 = this.insertNum2.bind(this);
    this.insertNum3 = this.insertNum3.bind(this);
  }

  insertNum1(event) {
    const n1 = this.setState({ input1: event.target.value });
    return n1;
  }

  insertNum2(event) {
    this.setState({ input2: event.target.value });
  }

  insertNum3(event) {
    this.setState({ input3: event.target.value });
  }

  sum() {
    const n1 = parseFloat(this.state.input1);
    const n2 = parseFloat(this.state.input2);
    const n3 = parseFloat(this.state.input3);

    const sumNumbers = n1 + n2 + n3;

    if (this.state.input1 === '' || this.state.input2 === '' || this.state.input3 === '') {
      return (
        <div>
          <p>Preencha todos os campos com um número</p>
        </div>
      )
    } return (
        <div>
          <p>A soma dos números é { sumNumbers }.</p>
        </div>
    )
  }

  render() {
    return (
      
      <form>
        <label htmlFor="input1">
        <input type="text" id="input1" placeholder="Digite um valor" value={this.state.input1} onChange={this.insertNum1} />
        </label>
        <label htmlFor="input2">
        <input type="text" id="input2" placeholder="Digite um valor" value={this.state.input2} onChange={this.insertNum2} />
        </label>
        <label htmlFor="input3">
        <input type="text" id="input3" placeholder="Digite um valor" value={this.state.input3} onChange={this.insertNum3} />
        </label>
        {this.sum()}
      </form>
    )
  }
}

export default Inputs;
