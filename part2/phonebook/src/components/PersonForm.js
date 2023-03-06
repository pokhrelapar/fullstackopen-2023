import React from 'react'

const PersonForm = ( {newName, newNumber, handlePeopleChange, handleNumberChange, addEntry}) => {
  return (
	
	<div className='contactForm'>
		<form onSubmit={addEntry}>
			<div className='name'>
				Name: <input className='inputName' value={newName} onChange={handlePeopleChange} required />
			</div>

			<div className='number'> 
				Phone Number: <input className='inputNumber' value={newNumber} onChange={handleNumberChange} required/>
			</div>

			<div>
				<button className='submitButton' type="submit" > Add New Contact </button>
			</div>
		</form>
	</div>
    
  )
}

export default PersonForm