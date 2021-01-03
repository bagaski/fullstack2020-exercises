import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [countries, setCountries] = useState([])
    

    useEffect(() => { 
        console.log('effect')    
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => { console.log('promise fulfilled')        
            setCountries(response.data) 
            }) 
        }, [])  
            console.log('render', countries.length, 'countries')

    const handleChange = (event) => {
        const typedCountry = event.target.value;
        const filteredCountry = countries.filter(country => { 
            return (
                country.name.toLowerCase().includes(typedCountry.toLowerCase())
            )}
            )
        console.log(typedCountry, filteredCountry)
        setCountries(filteredCountry)
    }        

    const noBullets = {
        listStyleType: 'none',
        padding: '0px',
        margin: '0px'
    }

    return (
        <div>
            <h2>Search for countries</h2>
            <form>
                <input type='text' onChange={handleChange} />
            </form>
            <h2>List of Countries</h2>
            <ul style={noBullets}>
             {countries.map(country => 
                 (countries.length === 1) ? <li key={countries.indexOf(country)}><strong>{country.name}</strong> <i>is part of {country.region} and the capital is {country.capital}</i><p><img src={country.flag} alt={`image of the flag of ${country.name}`} width='200px' height='auto'/></p><p>population: {country.population}</p></li> : <li key={countries.indexOf(country)}><i>{country.name}</i></li>
             )}
            </ul>
            {console.log(countries)}
        </div>
    )
}

export default App