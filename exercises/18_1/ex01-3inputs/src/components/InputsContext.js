import React, { Component, Fragment } from 'react';
import MyContext from './MyContext';

class InputsContext extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <Fragment>
            <form>
              <label htmlFor="input1">
              <input type="text" id="input1" placeholder="Digite um valor" value={context.state.input1} onChange={context.insertNum1} />
              </label>
              <label htmlFor="input2">
              <input type="text" id="input2" placeholder="Digite um valor" value={context.state.input2} onChange={context.insertNum2} />
              </label>
              <label htmlFor="input3">
              <input type="text" id="input3" placeholder="Digite um valor" value={context.state.input3} onChange={context.insertNum3} />
              </label>
              {context.sum}
            </form>
          </Fragment>
        )}
      </MyContext.Consumer>
    )
  }
}

export default InputsContext;