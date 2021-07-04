import logo from './logo.svg';
import './App.css';
import colors from './data';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state ={
      inputValue: '',
    }

    this.handleChange = this.handleChange.bind(this);

  }

    handleChange(e) {
      this.setState( {inputValue: e.target.value});
    }

  render() {
    const { inputValue } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Colors Selector</p>
          <hr className="hr" />
        </header>
        <div className="Select-colors">
          <label htmlFor="Label-list">
            Enter a Color
            <input id="Label-list" type="text" onChange={this.handleChange}/>
          </label>
          <ul className="Color-list">
            {colors
            .filter((item) => item.color.includes(inputValue))
            .map((color) => <li className="Color-item" key={color.value}>{color.color} - {color.value}</li> )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
