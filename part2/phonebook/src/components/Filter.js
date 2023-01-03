import React from "react";

const Filter = ({persons, setPersons}) => {
    const filterPerson = (event) => {
        const copyPerson = persons.filter((person) => {
          console.log('person.name', person.name)
          return person.name === event.target.value
        })
        setPersons(copyPerson)
        console.log('copyPerson', copyPerson)
      }
    return (
        <div>
            filter shown with <input onChange={filterPerson} />
        </div>
    )
}

export default Filter