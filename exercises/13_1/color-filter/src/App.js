import React from 'react';
import './App.css';
import colors from './data';

class App extends React.Component {
  constructor(props) {
    console.log('sendo construído');
    super(props);
    this.state = {
      filter: '',
    }
  }

  setFilterValue = (event) => {
    console.log('Novo conteúdo do input:', event.target.value)
    this.setState({filter: event.target.value});
  }

  filterColors = () => {
    if(this.state.filter === '') return colors;
    return colors.filter(({color}) => color === this.state.filter);
  }

  render() {
    console.log('estou sendo renderizado!!!');
    const filteredColor = this.filterColors();
    return (
      <div className="App">
        <h1>Filter Colors</h1>
        <div>
          <input type='text' onChange={this.setFilterValue} />
          {/* onChange é um método que se aplica na tag input para indicar "quando o valor altera". */}
        </div>
        <ul>
          {filteredColor.map(({color, value}) => <li key={value}>{color} coded as {value}</li>)}
        </ul>
      </div>
    );
  }  
}

export default App;
