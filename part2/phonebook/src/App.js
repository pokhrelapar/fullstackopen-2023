import { useState } from 'react'
import Filter from './components/Filter'
import Person from './components/Person'
import PersonForm from './components/PersonForm'


const App = () => {

	const [people, setPeople] = useState([
		{name: 'Arto Hellas', number:'0123456789', id:1},
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
	
	])
	const [newName, setNewName] = useState('')
	const [newNumber,setNewNumber] = useState('')
	const [searchString, setSearchString] = useState('')
	
	const addEntry =(event) => {
		event.preventDefault()
		console.log('clicked', event.target)

		//nummber: newNumber, id: people.length+1
		if (people.some(person=> person.name === newName)) {
			window.alert(`${newName} is already in the phonebook`)

		}

		else {
			const peopleObj = {name : newName, number: newNumber, id: people.length+1}
			setPeople(people.concat(peopleObj))
			setNewName('')
			setNewNumber('')
		}
	}


	const handlePeopleChange = (event) => {
		console.log("Name",event.target.value)
		setNewName(event.target.value)
	}

	const handleNumberChange = (event) => {
		console.log("Number",event.target.value)
		setNewNumber(event.target.value)
	}


	const handleSearchChange = (event) => {
		console.log("Search String",event.target.value)
		setSearchString(event.target.value)
	}


	const showPhoneRecords = () => {

		const filteredRecords = people.filter(person => {
			return person.name.toLowerCase().includes(searchString.toLowerCase())
		})

		return filteredRecords
	}


	console.log('Adding people', people)

	const filteredPeople = showPhoneRecords()


	return (
		<div>
			<h2>Phonebook</h2>

			<Filter searchString={searchString} handleSearchChange={handleSearchChange} />

			<PersonForm newName={newName} newNumber={newNumber} handlePeopleChange={handlePeopleChange} 
						handleNumberChange={handleNumberChange} addEntry={addEntry}/>


			<h2> Numbers </h2>
			<ul>
				{filteredPeople.map(person => <Person key={person.id} person={person} number={person}/>)}
			</ul>
		</div>
	)
}

export default App
