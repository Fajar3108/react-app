import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';

function App(props) {
  return (
    <div className="App">
      <h1>{props.nama}</h1>
      <h2>{props.kelas} | {props.absen}</h2>
    </div>
  );
}

class AppClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nama: "Maulana Fajar Ibrahim",
      kelas: "XI RPL",
      absen: 15 
    };
  }
  render(){
    return(
      <div>
        <h1>{this.state.nama}</h1>
        <h2>{this.state.kelas} | {this.state.absen}</h2>
      </div>
    );
  }
}
function Bio(props) {
  return (
    <div className="App">
      <h1>{props.nama}</h1>
      <h2>{props.kelas} | {props.absen}</h2>
    </div>
  );
}
const AppVar = <Bio nama="Maulana Fajar Ibrahim" kelas="XI RPL" absen="15" />;

ReactDOM.render(
  <App nama="Maulana Fajar Ibrahim" kelas="XI RPL" absen="15" />,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
