import { shallow } from "enzyme";
import React from "react";
import App from "../containers/App.js";

describe('App component', () => {
	it("expect to shallow render App component", () => {
		const wrapper = shallow(<App />)
		expect(wrapper).toMatchSnapshot();
	});

	it('clearDisplay', () => {
		const mockState = {
			newTask: 'random text',
			allTasks: [{text: 'fake task', status: true}],
			showAll: true
		}

		const wrapper = shallow(<App {...mockState}/>)
		const instance = wrapper.instance()
		instance.clearDisplay();
		expect(wrapper.state()).toEqual({
			newTask: '', 
			allTasks: [], 
			showAll: true
		})
	})

	it('handleInputChange', () => {
		const mockState = {
			newTask: 'random text',
			allTasks: [],
			showAll: true
		}
		const mockEvent = {
			target: {value: 'event text'}
		}

		const wrapper = shallow(<App {...mockState}/>)
		const instance = wrapper.instance()

		instance.handleInputChange(mockEvent);
		expect(wrapper.state()).toEqual({
			newTask: 'event text', 	
			allTasks: [], 
			showAll: true
		})
	})

	it('addTask', () => {
		const mockState = {
			newTask: 'test',
			allTasks: [],
			showAll: true
		}

		const wrapper = shallow(<App {...mockState} />)
		const instance = wrapper.instance()

		instance.addTask()

		expect(wrapper.state().allTasks).toEqual([{status: true, text: 'test'}])
	})

	it('toggleTaskStatus', () => {
		const mockState = {
			newTask: '',
			allTasks: [{status:true, text:'test'}],
			showAll: true
		}

		const wrapper = shallow(<App {...mockState}/>)
		const instance = wrapper.instance()

		instance.toggleTaskStatus(0);
		expect(wrapper.state().allTasks[0].status).toBe(false)
	})

	it('deleteTask', () => {
		const mockState = {
			newTask: '',
			allTasks: [{status:true, text:'test'}],
			showAll: true
		}

		const wrapper = shallow(<App {...mockState}/>)
		const instance = wrapper.instance()

		instance.deleteTask(0);
		expect(wrapper.state()).toEqual({
			newTask: '',
			allTasks: [],
			showAll: true
		})
	})

	it('toggleShow', () => {
		const mockState = {
			newTask: '',
			allTasks: [],
			showAll: true
		}

		const wrapper = shallow(<App {...mockState}/>)
		const instance = wrapper.instance()

		instance.toggleShow(false);
		expect(wrapper.state()).toEqual({
			newTask: '', 	
			allTasks: [], 
			showAll: false
		})
	})
})