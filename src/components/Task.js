import React from 'react';

const Task = ({ text, status }) => {
	return(
		<li 
			id='task'
			className='p-5 cursor-pointer border-l-8 border-orange-500 text-white'
		>
			complete
		</li>
	)
}

// or border-green-400

export default Task