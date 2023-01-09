import React, { useState } from "react";
import personService from '../servicers/persons'

const PersonForm = ({ persons, setPersons, message, setMessage }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()

        let flag = false
        let person
        persons.forEach((p) => {
            if (p.name === newName) {
                person = p
                return flag = true
            }
        })
        if (flag) {//name相同，修改number
            person = { ...person, number: newNumber }
            personService
                .update(person.id, person)
                .then(returnPerson => {
                    setPersons(persons.map(p => p.id !== person.id ? p : returnPerson))
                })
                .catch(error => {
                    setMessage(`Information of ${newName} has already been removed from server`)
                    setTimeout(() => {
                        setMessage(null)
                    }, 3000)
                })
        }
        else {
            const newPerson = {
                name: newName,
                number: newNumber
            }
            personService
                .create(newPerson)
                .then(returnedPersons => setPersons(persons.concat(returnedPersons)))
        }
        setNewName('')
        setNewNumber('')
        setMessage(`ADD${newName}`)
        setTimeout(() => {
            setMessage(null)
        }, 3000)
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm