import React from 'react';
import Task from './Task';

const Display = ({ tasks, showAll, toggleTaskStatus, deleteTask }) => {

	const renderText = () => {
		return tasks.length <= 0 ?
			<span className='text-center inline-block w-full p-4 text-gray-600 text-lg'>
				Add a new item to get started!
			</span>
			:
			null
	}

	const renderList = () => {
		let allTasks;

		if(showAll) {
			allTasks = tasks.map((task, i) => {
				return <Task 
					status={task.status}
					text={task.text}
					toggleTaskStatus={toggleTaskStatus}
					index={i}
					key={i}
					deleteTask={deleteTask}
				/>
			})
		} else {
			allTasks = tasks.filter(task => task.status).map((task, i) => {
				return <Task 
					status={task.status}
					text={task.text}
					toggleTaskStatus={toggleTaskStatus}
					index={i}
					key={i}
					deleteTask={deleteTask}
				/>
			})
		}

		return allTasks
	}

	return(
		<div className='h-64 overflow-y-scroll'>
			<ul
				className='m-0 my-4 p-0 list-none w-full'
			>
				{renderList()}
			</ul>
			{renderText()}
		</div>
	)
}

export default Display