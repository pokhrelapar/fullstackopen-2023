const Person = ({ person, handleRemove}) => {
  return (
    <li className="contacts">{person.name}: {person.number} <button className="deleteContact" onClick={handleRemove}> Delete</button></li>
  )
}

export default Person