import React from 'react';
import Task from './Task';

const Display = ({ tasks, showAll }) => {

	const renderText = () => {
		return tasks.length <= 0 ?
			<span className='text-center inline-block w-full p-4 text-gray-600 text-lg'>
				Add a new item to get started!
			</span>
			:
			null
	}

	const renderList = () => {
		const allTasks = tasks.map((task, i) => {
			return <Task 
				status={task.status}
				text={task.text}
				key={i}
			/>
		})

		return showAll ?
			allTasks
			:
			allTasks.filter(task => task.status === false)
	}

	return(
		<div className='h-64 overflow-y-scroll overflow-x-hidden'>
			<ul
				id='list'
				className='m-0 my-4 p-0 list-none w-full'
			>
				{renderList()}
			</ul>
			{renderText()}
		</div>
	)
}

export default Display