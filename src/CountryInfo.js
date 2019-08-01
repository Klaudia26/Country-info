import React from 'react';

const CountryInfo = (props) => {
    return (
        props.countries.map(country => {
            return (
                <div key={country.id}>
                    <p>Name :  {country.name}</p>
                    <p>Capital :  {country.capital}</p>
                    <p>Population :  {country.population}</p>
                    <p>Languages :  {country.languages.map(lang => lang.name)}</p>
                    <p>Region :  {country.region}</p>
                    <p>NumericCode :  {country.numericCode}</p>
                    <img src={country.flag} alt="flag" />
                </div>
            )
        })
    )
}

export default CountryInfo;
