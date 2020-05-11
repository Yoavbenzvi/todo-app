import React from 'react';

const InputField = ({ addTask, handleInputChange, inputValue }) => {
	return(
		<div className='flex items-center justify-between relative'>
			<input 
				onChange={handleInputChange}
				value={inputValue}
				placeholder='Add a new task...'
				type='text'
				className='p-4 pr-20 border-t-2 border-green-500 rounded bg-gray-900 text-white w-full shadow-inner outline-none"'
			/>
			<button
				onClick={addTask}
				type='button'
				className='text-green-400 hover:text-green-300 bg-gray-900 font-semibold py-2 px-4 absolute right-0 mr-2 focus:outline-none'
			>
				ADD
			</button>
		</div>
	)
}

export default InputField