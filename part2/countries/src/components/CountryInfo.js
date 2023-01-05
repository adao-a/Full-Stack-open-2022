import React from 'react'

const CountryInfo = ({country}) => {
    let languages = []
        for (let language in country.languages) {
            languages = languages.concat(country.languages[language])
        }

        return (
            <div>
                <h2>{country.name.common}</h2>
                <p>{country.area}</p>
                <h4>languages:</h4>
                <ul>
                    {languages.map(language => {
                        return <li key={language}>{language}</li>
                    })}
                </ul>
                <img src={country.flags.png} alt="flags"></img>
            </div>
        )
    }

export default CountryInfo