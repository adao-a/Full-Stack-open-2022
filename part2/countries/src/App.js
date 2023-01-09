import {useState} from 'react'
import axios from 'axios'
import ShowCountries from './components/ShowCountries'
const App = () => {
  const [countries, setCountries] = useState([])

  const filterCountries = (event) => {
    event.preventDefault()
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        const copyCountries = response.data.filter((country) => {
          return country.name.common.startsWith(event.target.value)
        })
        setCountries(copyCountries)
      })
  }

  return (
    <div>
      find countries <input onChange={filterCountries}/>
      <ShowCountries countries = {countries}/>
    </div>
  )
}

export default App
