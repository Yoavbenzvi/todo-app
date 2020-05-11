import React from 'react';

const Task = ({ text, status }) => {
	const active = 'm-1 p-5 cursor-pointer border-l-8 border-orange-500 text-white'
	const disabled = 'm-1 p-5 cursor-pointer border-l-8 border-green-400 text-white'

	return(
		<li 
			id='task'
			className={status ? active : disabled}
		>
			{text}
		</li>
	)
}

export default Task