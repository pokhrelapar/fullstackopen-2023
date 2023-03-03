import React from "react";
import { useState } from "react";



const Button = ({handleClick,text}) => {
	return (
   		<button onClick={handleClick}>{text}</button>
	)
}



const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.'
    ]

	const [selected,  setSelected] =useState(0)
	const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))


	const showRandomAnecdote = () => {
		const randomIdx = Math.floor(Math.random() * anecdotes.length);
		console.log('Random number',randomIdx)

		setSelected(randomIdx)

	}

	const incrementVote = () => {
		const newVotes = [...votes]
		newVotes[selected]+=1
		setVotes(newVotes)

	}

	const maxVote = Math.max(...votes)
	console.log('Max vote count', maxVote)
	const mostVotedAnecodte = anecdotes[votes.indexOf(maxVote)]
	console.log('Most votes', mostVotedAnecodte)

  	return (
		<div>
			<h1>Annecdote of the day</h1>
			 <p>{anecdotes[selected]} </p>
			 <p> has {votes[selected]} votes</p>

			<div>
				<Button handleClick={showRandomAnecdote} text='Next Anecdote'/>
				<Button handleClick={incrementVote} text='Vote Anecdote'/>
            </div>		

			<h2> Anecdotes with most votes</h2>
			<p> {mostVotedAnecodte}</p>
			<p> has {maxVote} votes</p>
		</div>

  	)
};

export default App;
