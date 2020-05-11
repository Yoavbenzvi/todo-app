import { shallow } from "enzyme";
import React from "react";
import App from "../containers/App.js";

describe('App component', () => {
	it("expect to render App component", () => {

		const wrapper = shallow(<App />)
		expect(wrapper).toMatchSnapshot();
	});
})