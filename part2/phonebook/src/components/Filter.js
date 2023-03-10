import React from 'react'

const Filter = ({searchString, handleSearchChange}) => {
  return (
    <div className='filter'>
        Filter records with <input value={searchString} onChange={handleSearchChange}/>			
    </div>
  )
}

export default Filter