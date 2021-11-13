import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res =>res.json)
    .then(data => console.log(data))
  },[]);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
