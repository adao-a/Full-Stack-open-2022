import React from "react";
import personService from '../servicers/persons'

const Person = ({ persons, setPersons}) => {
    const deletePerson = person => {
        if(window.confirm(`Delete ${person.name} ?`)) {
            personService.strikeOut(person.id)
            const copyPersons = persons.filter(p => p.id !== person.id)
            setPersons(copyPersons)
        }
    }

    return (
        <div>
            {persons.map((person,index) => 
            <p key={index}>
                {person.name} {person.number}
                <button onClick={() => deletePerson(person)}>delete</button>
            </p>
            )}
        </div>
    )
}

export default Person