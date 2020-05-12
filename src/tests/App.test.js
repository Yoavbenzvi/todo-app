import { shallow } from "enzyme";
import React from "react";
import App from "../containers/App.js";

describe('App component', () => {
	it("expect to shallow render App component", () => {
		const wrapper = shallow(<App />)
		expect(wrapper).toMatchSnapshot();
	});

	it('test clearDisplay method', () => {
		const mockState = {
			newTask: 'random text',
			allTasks: [{text: 'fake task', status: true}],
			showAll: true
		}

		const wrapper = shallow(<App {...mockState}/>)
		const instance = wrapper.instance()
		instance.clearDisplay();
		expect(wrapper.state()).toEqual({newTask: '', allTasks: [], showAll: true})
	})

	it('test handleInputChange method', () => {
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
		expect(wrapper.state()).toEqual({newTask: 'event text', 	allTasks: [], showAll: true})
	})

	it('test addTask method', () => {
		const mockState = {
			newTask: 'test',
			allTasks: [],
			showAll: true
		}

		const wrapper = shallow(<App {...mockState} />)
		const instance = wrapper.instance()

		instance.addTask()

		expect(wrapper.state().allTasks[0]).toEqual({text: 'test', status: true})
	})

	it('test toggleShow method', () => {
		const mockState = {
			newTask: '',
			allTasks: [],
			showAll: true
		}

		const wrapper = shallow(<App {...mockState}/>)
		const instance = wrapper.instance()

		instance.toggleShow(false);
		expect(wrapper.state()).toEqual({newTask: '', 	allTasks: [], showAll: false})
	})
})