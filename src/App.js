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
          <div className="Div-label">
            <label htmlFor="Label-list">
              Enter a Color: 
              <input id="Label-list" type="text" onChange={this.handleChange}/>
            </label>
          </div>
          <ul className="Color-list">
            {colors
            .filter((item) => item.color.includes(inputValue))
            .map((color) => 
            <li className="Color-item" key={color.value}>
              <div 
                style={{ background: color.value }}
                className="Color-container"
              />
              {color.color} - {color.value}</li> )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
