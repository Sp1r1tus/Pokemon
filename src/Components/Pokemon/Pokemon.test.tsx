import React from 'react';
import Button from '@material-ui/core/Button';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
	adapter: new Adapter()
});

const setup = () => {
	const wrapper = shallow(<Button />);

	return {
		wrapper
	};
};

describe('Button test', () => {
	test('render', () => {
		const { wrapper } = setup();
		expect(wrapper.exists()).toBe(true);
	});
});
