import { shallow } from "enzyme";
import React from "react";
import InputField from "../components/InputField.js";

describe('InputField component', () => {
	it("expect to render InputField component", () => {

		const wrapper = shallow(<InputField />);
		expect(wrapper).toMatchSnapshot();
	});

	it('testing button click', () => {
		const mockClick = jest.fn();
		const wrapper = shallow(<InputField addTask={mockClick}/>);

		wrapper.find({type: 'button'}).simulate('click');
		expect(mockClick).toHaveBeenCalled();
	})

	it('testing input field change', () => {
		const mockChange = jest.fn();
		const wrapper = shallow(<InputField handleInputChange={mockChange}/>);

		wrapper.find({type: 'text'}).simulate('change')
		expect(mockChange).toHaveBeenCalled();
	})
})
