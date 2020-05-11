import React from 'react';

const ControlPanel = ({ filterTasksArray, clearDisplay }) => {
	return(
		<div className='flex py-4 border-t border-gray-900 justify-between'>
			<div>
				<button
					id='all'
					className="text-xs mr-3 hover:underline text-gray-500 focus:outline-none text-green-500 font-bold"
					onClick={() => filterTasksArray(true)}
				>
					ALL
				</button>
				<button
					id='active'
					className='text-xs mr-3 hover:underline text-gray-500 focus:outline-none'
					onClick={() => filterTasksArray(false)}
				>
					ACTIVE
				</button>
			</div>
			<div>
				<button
					id='clear'
					className='text-xs mr-3 text-red-500 focus:outline-none hover:underline'
					onClick={clearDisplay}
				>
					CLEAR
				</button>
			</div>
		</div>
	)
}

export default ControlPanel