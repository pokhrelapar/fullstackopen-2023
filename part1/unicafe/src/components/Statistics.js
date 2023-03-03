import React from 'react'
import StatisticsLine from './StatisticsLine'

const Statistics = ({clicks}) => {

    const totalClicks = clicks.good + clicks.neutral + clicks.bad 
    const average = totalClicks ? (clicks.good - clicks.bad)/totalClicks : totalClicks
	console.log('Average',average)

	const postivePercent = clicks.good ? clicks.good*100/totalClicks : clicks.good
	console.log('Postive Percent',postivePercent)

    if (totalClicks === 0) {
        return (
            <div> <strong>No feeback was given</strong></div>
        )
    }

    return (
        <div>
            <table>
                <tbody>
                    <StatisticsLine text="Good" value={clicks.good}/>
                    <StatisticsLine text="Neutral" value={clicks.neutral}/>
                    <StatisticsLine text="Bad" value={clicks.bad}/>
                    <StatisticsLine text="Total" value={totalClicks}/>
                    <StatisticsLine text="Average" value={average}/>
                    <StatisticsLine text="Postive" value={postivePercent} symbol="%"/>
                </tbody>            
            </table>
        </div>
  )
}

export default Statistics