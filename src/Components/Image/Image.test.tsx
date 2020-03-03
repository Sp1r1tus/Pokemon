import React from 'react';
import Image from './Image';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
	adapter: new Adapter()
});

describe('Image component', () => {
	const imgSrc = {
        back_default: '../../test/test.png',
        back_female: '../../test/test.png',
        back_shiny: '../../test/test.png',
        back_shiny_female: '../../test/test.png',
        front_default: '../../test/test.png',
        front_female: '../../test/test.png',
        front_shiny: '../../test/test.png',
        front_shiny_female: '../../test/test.png'};

	it('renders an image tag', () => {
		const wrapper = mount(<Image pictures={imgSrc} />);
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('img')).toMatchObject({});
	});
});
