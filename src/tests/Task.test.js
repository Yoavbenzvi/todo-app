import { shallow } from "enzyme";
import React from "react";
import Task from "../components/Task.js";

describe('Task component', () => {
	it("expect to render Task component", () => {
		
		const wrapper = shallow(<Task />)
		expect(wrapper).toMatchSnapshot();
	});

	it('test className', () => {
		const wrapper = shallow(<Task status={true}/>);
		const mockClass = 'm-1 p-5 cursor-pointer border-l-8 border-orange-500 text-white';

		expect(wrapper.find({id: 'task'}).hasClass(mockClass)).toEqual(true)
	})	
})

