import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((total, country) => total + country.population,0);
    return (
        <div>
            <h2>Added Country: {cart.length}</h2>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;