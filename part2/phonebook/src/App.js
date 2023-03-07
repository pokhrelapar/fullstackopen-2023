import { useState, useEffect} from 'react'
import dataService from './services/dataService'
import Filter from './components/Filter'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Notification from './components/Notifcation'



const App = () => {

	const [people, setPeople] = useState([])
	const [newName, setNewName] = useState('')
	const [newNumber,setNewNumber] = useState('')
	const [searchString, setSearchString] = useState('')
	const [notification, setNotification] = useState({message:null, isError:false})
		
	//retrieves the people resource from the local json server.
	//useEffect to set initial state of people
	useEffect(() => {
		dataService
		.getAll()
		.then(initialPeople => {
			setPeople(initialPeople)
		})
			
	}, []);


	const addEntry =(event) => {
		event.preventDefault()
		console.log('clicked', event.target)

		const personExists = people.find(person => person.name.toLowerCase() === newName.toLowerCase())
		console.log("what is", personExists)

		//nummber: newNumber, id: don't assign id, let the server assing it
		if (personExists) {
			console.log("Person exists")
			const okToReplace = window.confirm(`${newName} is already added to the phonebook, replace old number with new number?`)
			if(okToReplace) {
				console.log("Reached")
				const changePeopleObj = {...personExists, number: newNumber}
				console.log("New Number", changePeopleObj.number)

				//use PUT to replace the existing phone number

				dataService
					.update(personExists.id, changePeopleObj)
					.then(returnedPerson => {
						setPeople(people.map(person=> person.id !== personExists.id ? person: returnedPerson))
						console.log("Number updated")
						console.log(`New number for ${returnedPerson.name} is ${returnedPerson.number}`)
						setNewName('')
          				setNewNumber('')
						setNotification({message:`Contact updated for ${returnedPerson.name}`,isError:false});
						setTimeout(() => {
							setNotification({message:null, isError:false});
						}, 5000);
					})
					.catch(error => {
						console.log(error.response.data.error)
						setNotification({ message: `Infromation for ${newName} has already been removed from the server `, isError: true });
						setTimeout(() => {
							setNotification({message:null, isError:false});
						}, 5000);
					})
			}

		}

		else {
			console.log("Person doesn't exist")
			const peopleObj = {name : newName, number: newNumber}

			dataService.create(peopleObj).then(returnedPeople => {
				setPeople(people.concat(returnedPeople))
				setNotification({message:` Added ${peopleObj.name} to your phonebook`,isError:false});
				setTimeout (()=> {
					setNotification({message:null, isError:false});
				},5000)
				setNewName('')
				setNewNumber('')
			})
		}
	}


	const deleteEntry = (id) => {
		//find the person to be deleted based on the id
		const person = people.find(p=>p.id===id)
		const confirmDelete = window.confirm(`Delete ${person.name}?`)

		if (confirmDelete) {
			dataService
				.remove(person.id)
				.then(()=> {
					console.log(`Removed ${person.name}`)
					setPeople(people.filter(p=> p.id !== person.id))
					setNotification({message:`Removed ${person.name} from your phonebook`,isError:false});
					setTimeout (()=> {
						setNotification({message:null, isError:false});
					},5000)

			})
			.catch(error => {
				setNotification({ message: `Infromation for ${person.name} has already been removed from the server `, isError: true });
				setTimeout(() => {
					setNotification({message:null, isError:false});
					}, 5000);
				})
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


	console.log('Current people', people)

	const filteredPeople = showPhoneRecords()


	return (
		<div>
			<h2>Phonebook</h2>
			<Notification notification={notification}/>

			<Filter searchString={searchString} handleSearchChange={handleSearchChange} />
			
			<h2>Add a new contact </h2>

			<PersonForm newName={newName} newNumber={newNumber} handlePeopleChange={handlePeopleChange} 
						handleNumberChange={handleNumberChange} addEntry={addEntry}/>


			<h2> Your Contacts </h2>
			<div className='card-grid'>
				{filteredPeople.map(person => <Person key={person.id} person={person} number={person} handleRemove={()=>deleteEntry(person.id)}/>)}
			</div>
		</div>
	)
}

export default App
