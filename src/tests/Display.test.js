import { shallow } from "enzyme";
import React from "react";
import Display from "../components/Display.js";

describe('Display component', () => {
	it("expect to render Display component", () => {

		const wrapper = shallow(<Display tasks={[]}/>);
		expect(wrapper).toMatchSnapshot();
	});
})
