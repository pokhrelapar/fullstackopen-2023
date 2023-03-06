const Person = ({ person, handleRemove}) => {
  return (
	<div className="card">
		<h2 className="person-name">{person.name} </h2>
		<p className="person-number">{person.number}</p>
		<button className="deleteContact" onClick={handleRemove}> Delete</button>
	</div>
  )
}

export default Person