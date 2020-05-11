import React from 'react';
import Task from './Task';

const Display = ({ tasks }) => {
	return(
		<div className='h-64'>
			<ul
				id='list'
				className='m-0 my-4 p-0 list-none w-full'
			>
			<Task />
			</ul>
				<span className='text-center inline-block w-full p-4 text-gray-600 text-lg'>
					Add a new item to get started!
				</span>
		</div>
	)
}

export default Display