import React from 'react'

const StatisticsLine = ({text, value, symbol}) => {
  return (
    <tr>
        <td>{text}</td>
        <td> {value}{symbol}</td>
    </tr>
  )
}

export default StatisticsLine