import React from "react";

const PersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber}) => {
    const addPerson = (event) => {
        event.preventDefault()

        let flag = false
        persons.forEach((person) => {
            if (person.name === newName) { return flag = true }
        })
        if (flag) {
            window.alert(`${newName} is already added to phonebook`)
        }
        else {
            const newPerson = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(newPerson))
        }
        setNewName('')
        setNewNumber('')
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