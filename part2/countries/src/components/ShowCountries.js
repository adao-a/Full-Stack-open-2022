import React, {useState} from 'react'
import CountryInfo from './CountryInfo'

const ShowCountries = ({ countries }) => {
    const [showElem, setShowElem] = useState('block')
    if (countries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    }
    else if (countries.length > 1 && countries.length <= 10) {
        let state = false
        const showCountryInfo = () => {
            state = !state
            if(state === false) setShowElem('none')
            else setShowElem('block')
        }
        
        return (
            <div>
                {countries.map(country => {
                    return <div key={country.name.common}>
                        <span >{country.name.common}</span>
                        <button onClick={showCountryInfo}>show</button>
                        <div style={{display:showElem}}>
                            <CountryInfo country={country}/>
                        </div>
                    </div>
                })}
            </div>
        )
    }
    else if (countries.length === 1) {
        return (
            <CountryInfo country={countries[0]} />
        )
    }
}

export default ShowCountries