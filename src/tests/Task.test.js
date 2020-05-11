import { shallow } from "enzyme";
import React from "react";
import Task from "../components/Task.js";

describe('Task component', () => {
	it("expect to render Task component", () => {
		
		const wrapper = shallow(<Task />)
		expect(wrapper).toMatchSnapshot();
	});

	it('test className', () => {
		const wrapper = shallow(<Task status={true}/>)
		const mockClass = 'p-5 cursor-pointer border-l-8 border-orange-500 text-white';

		expect(shallow.find({id: 'task'}).hasClass(mockClass))
	})	

	it('test text', () => {
		const mockText = 'test'
		const wrapper = shallow(<Task text={mockText}/>)

		expect(shallow.find({id: 'text'}).text()).toBe('test')
	})	
})

