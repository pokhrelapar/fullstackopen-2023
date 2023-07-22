import { useState, useEffect} from 'react'
import dataService from './services/dataService'
import Country from './components/Country'
import Filter from './components/Filter'




const App = () => {

	const [countries, setCountries] = useState([])
	const [searchString, setSearchString] = useState('')
	const [selectedCountry, setSelectedCountry] = useState('')
		
	//retrieves the people resource from the local json server.
	//useEffect to set initial state of people
	useEffect(() => {
		dataService
		.getAll()
		.then(country => {
			setCountries(country)
			console.log('All',country)
			console.log(country[0].capital[0])
		})
			
	}, []);



	const handleSearchChange = (event) => {
		console.log('strng', event.target.value)
		setSearchString(event.target.value)

	}

	const toggleDetails = (country) => {
		setSelectedCountry((prevCountry) => (prevCountry === country ? null : country))
	}

	const showCountriesRecords = () => {

		const filteredRecords = countries.filter(country => {
			return country.name.common.toLowerCase().includes(searchString.toLowerCase())
		})

		if (filteredRecords.length >10) {
			return <p>Too many results. Refine your search</p>;
		}

		else if (filteredRecords.length ===1) {
			return <Country country={filteredRecords[0]} showDetails={true} toggleDetails={toggleDetails}/>
		}

		else {
			return filteredRecords.map(country => <Country key={country.ccn3} country={country} showDetails={selectedCountry===country} toggleDetails={toggleDetails} />)
		}
	}



	const filteredCountries = showCountriesRecords()
	
	return (
		<div>
			<h2>Countries</h2>

			<Filter searchString={searchString} handleSearchChange={handleSearchChange}/>

			<div ></div>
			<div className='card-grid'>
				{filteredCountries}
			</div>
		</div>
	)
}

export default App
