import { shallow } from "enzyme";
import React from "react";
import ControlPanel from "../components/ControlPanel.js";

describe('ControlPanel component', () => {
	it("expect to render ControlPanel component", () => {

		const wrapper = shallow(<ControlPanel />)
		expect(wrapper).toMatchSnapshot();
	});

	it("test click events", () => {
		const mockClick = jest.fn()
		const wrapper = shallow(<ControlPanel filterTasksArray={mockClick} clearDisplay={mockClick}/>)

		wrapper.find({id: 'all'}).simulate('click')
		wrapper.find({id: 'active'}).simulate('click')
		wrapper.find({id: 'clear'}).simulate('click')

		expect(mockClick).toHaveBeenCalledTimes(3)
	});
})