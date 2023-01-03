import { useState, useEffect} from 'react'
import axios from "axios"
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons '

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  },[])
  // const addPerson = (event) => {
  //   event.preventDefault()

  //   let flag = false
  //   persons.forEach((person) => {
  //     if (person.name === newName) { return flag = true }
  //   })
  //   if(flag) {
  //     window.alert(`${newName} is already added to phonebook`)
  //   }
  //   else {
  //     const newPerson = {
  //       name: newName,
  //       number: newNumber
  //     }
  //     setPersons(persons.concat(newPerson))
  //   }
  //   setNewName('')
  // }

  // const handleNameChange = (event) => {
  //   setNewName(event.target.value)
  // }
  // const handleNumberChange = (event) => {
  //   setNewNumber(event.target.value)
  // }
  // const filterPerson = (event) => {
  //   const copyPerson = persons.filter((person) => {
  //     console.log('person.name', person.name)
  //     return person.name === event.target.value
  //   })
  //   setPersons(copyPerson)
  //   console.log('copyPerson', copyPerson)
  // }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setPersons={setPersons} />
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
      <h3>Numbers</h3>
      <Persons persons = {persons}/>
    </div>
  )
}

export default App