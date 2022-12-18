import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>안녕하세요!!!</h1>
      <header className="App-header">
        <h1>테스트</h1>
        <h2>두 번째</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
