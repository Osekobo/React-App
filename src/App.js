import logo from './logo.svg';
import './App.css';
// import Button from "./components/Button"
import Button from "./components/Butto"
// import Head from "./components/Hello"
import Profile from "./components/Profilecard"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <Button title="Click Me!"></Button>
      {/* <Head></Head> */}
      {/* <Button title="Login" ></Button> */}
      {/* <Button title="SignUp"></Button> */}
      <Profile name="Collins Oseko" age="20" profession="Software Developer"></Profile>

    </div>
  );
}

export default App;
