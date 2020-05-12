import React from 'react';

const ControlPanel = ({ showAll, toggleShow, clearDisplay }) => {
	const active = 'text-xs mr-3 hover:underline text-gray-500 focus:outline-none text-green-500 font-bold'
	const disabled = 'text-xs mr-3 hover:underline text-gray-500 focus:outline-none'

	return(
		<div className='flex py-4 border-t border-gray-900 justify-between'>
			<div>
				<button
					id='all'
					className={showAll ? active : disabled}
					onClick={() => toggleShow(true)}
				>
					ALL
				</button>
				<button
					id='active'
					className={showAll ? disabled : active}
					onClick={() => toggleShow(false)}
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