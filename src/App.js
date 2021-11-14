import './App.css';
import React,{useState,useEffect} from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';


function App() {
  const [countries, setCountries] = useState([]);
  const [cart,setCart] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then(res =>res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  },[]);
  const handleAddCountry = (country) => {
    const newCart = [...cart,country];
    setCart(newCart);
  }
  return (
    <div className="App">
      <h2>Country Added: {cart.length}</h2>
      <Cart cart={cart}></Cart>
      <ul>
        {countries.map((country) => (
          <Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>
        ))}
      </ul>
    </div>
  );
}

export default App;
