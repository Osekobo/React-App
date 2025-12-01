import logo from './logo.svg';
import Button from "./components/Button"
import Lists from "./components/list"
import Butto from "./components/Butto"
import Table from "./components/StudentTable"
// import Head from "./components/Hello"
import Profile from "./components/Profilecard"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import StudentCard from "./components/StudentCard";
import Navbar from "./components/Useri";
import OnlineStatus from "./components/OnlineStatus";
import Counter from "./components/Counter";
import Color from "./components/ColorPicker";
import MyForm from './components/form';

function App() {
  const students = [
    { id: 1, name: "John", course: "React", score: 85 },
    { id: 2, name: "Mary", course: "Python", score: 92 },
    { id: 3, name: "Kevin", course: "JavaScript", score: 78 }
  ];
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
      <Butto title="Click Me!"></Butto>
      <Lists></Lists>
      <Table></Table>
      {/* <Head></Head> */}
      <Button title="Login" ></Button>
      <Button title="SignUp"></Button>
      <Profile name="Collins Oseko" age="20" profession="Software Developer"></Profile>
      {students.map((student) => (
        <StudentCard key={student.id} name={student.name} course={student.course}
          score={student.score} ></StudentCard>
      ))}
      <Color></Color>
      
      < OnlineStatus></OnlineStatus>
      <Counter></Counter>
      <Navbar></Navbar>
      <MyForm></MyForm>
    </div>
  );
}

export default App;

