import React from 'react';

const Task = ({ text, status, toggleTaskStatus, index, deleteTask }) => {
	const active = 'm-1 p-5 cursor-pointer border-l-8 border-orange-500 text-white flex justify-between'
	const disabled = 'm-1 p-5 cursor-pointer border-l-8 border-green-400 text-gray-500 flex justify-between'

	const deleteSelf = (e) => {
		deleteTask(index)
		e.stopPropagation();
	}

	return(
		<li 
			id='task'
			className={status ? active : disabled}
			onClick={() => toggleTaskStatus(index)}
		>
			<p 
				className={status ? '' : 'line-through'}
			>
				{text}
			</p> 
			<button 
				onClick={(e) => deleteSelf(e)} 
				className='text-red-500 text-xl font-bold no-underline'
			>
				X
			</button>
		</li>
	)
}

export default Task