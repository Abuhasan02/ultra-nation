import React from 'react';

const Country = (props) => {
    const {name,population,region,flags} = props.country;
    const handleAddCountry = props.handleAddCountry;
    const flagStyle = {
        height:'80px'
    }
    const countryStyle = {
        border: '1px solid red',
        margin:'10px',
        padding:'5px',
        borderRadius:'5px'
    }
    return (
        <div style={countryStyle}>
            <h4>Name: {name}</h4>
            <img style={flagStyle} src={flags.png} alt=""/>
            <p>Population: {population}</p>
            <p>Region: <small>{region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;