import logo from './logo.svg';
import './App.css';
// import colors from './data';

function App() {
  // constructor() {
  //   super();

  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Colors Selector</p>
        <hr className="hr"></hr>
      </header>
      {/* <div className="Select-colors">
      <label htmlFor="Label-list">
        Enter a Color
          <input id="Label-list" type="text" onChange={() => {}}/>
        </label>
        <ul className="Color-list">
          {colors.map((color) => <li className="Color-item" key={color.value}>{color.color} - {color.value}</li>)}
        </ul>
      </div> */}
    </div>
  );
}

export default App;
