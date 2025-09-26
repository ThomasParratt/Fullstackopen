import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm.jsx'
import Person from './components/Person.jsx'
import Notification from './components/Notification.jsx'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas', 
      number: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons)
    })
  }, [])

  const addName = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    setMessage(`Added ${newName}`)
    setTimeout(() => {
      setMessage(null)
    }, 5000)

    personService.create(personObject).then(() => {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    })
  }

  const deleteName = (id) => {
    const person = persons.find((n) => n.id === id)

    if (!window.confirm(`Delete ${person.name}?`)) {
      return
    }

    personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter((n) => n.id !== id))
      })
      .catch(() => {
        alert(`${person.name} was already deleted from server`)
        setPersons(persons.filter((n) => n.id !== id))
      })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
        <PersonForm add={addName} name={newName} number={newNumber} nameChange={handleNameChange} numberChange={handleNumberChange}/>
      <h2>Numbers</h2>
          {persons.map((persons) => (
            <Person
              key={persons.id}
              name={persons.name}
              number={persons.number}
              handleDelete={() => deleteName(persons.id)}
            />
          ))}
    </div>
  )
}

export default App
