import logo from './logo.svg';
import './App.css';

function App() {
  let nama = "Maulana Fajar Ibrahim";
  let kelas = "XI RPL";
  let absen = "15";

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
        <h1 className="App-nama">{nama}</h1>
        <h2 className="App-detail">{kelas} | {absen}</h2>
      </header>
    </div>
  );
}

export default App;
