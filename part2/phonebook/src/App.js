import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons '

const App = () => {
  const [persons, setPersons] = useState([
    { name: '1', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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