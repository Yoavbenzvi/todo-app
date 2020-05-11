import { shallow } from "enzyme";
import React from "react";
import Display from "../components/Display.js";

describe('Display component', () => {
	it("expect to render Display component", () => {

		const wrapper = shallow(<Display />);
		expect(wrapper).toMatchSnapshot();
	});

	it("test array", () => {
		const mockArray = new Array(10).fill(null);

		const wrapper = shallow(<Display tasks={mockArray}/>);
		expect(wrapper.find({id: 'list'}).length).toEqual(10)
	});
})
