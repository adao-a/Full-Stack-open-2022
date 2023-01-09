import { useState, useEffect} from 'react'
import personService from './servicers/persons'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons '

const Notification = ({message}) => {
  if(message === null) {
    return null
  }

  const notification = {
    background: 'lightgrey',
    color: 'green',
    borderRadius: '5px' ,//连字符用小驼峰
    padding: '10px',
    border: 'green 3px solid'
  }
  
  return (
    <div style={notification}>
      {message}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  },[])
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <Filter persons={persons} setPersons={setPersons} />
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} message={message} setMessage={setMessage}/>
      <h3>Numbers</h3>
      <Persons persons = {persons} setPersons={setPersons}/>
    </div>
  )
}

export default App