import React from "react";

const Filter = ({persons, setPersons}) => {
    const filterPerson = (event) => {
        const copyPerson = persons.filter((person) => {
          return person.name.startsWith(event.target.value)
        })
        setPersons(copyPerson)
      }
    return (
        <div>
            filter shown with <input onChange={filterPerson} />
        </div>
    )
}

export default Filter