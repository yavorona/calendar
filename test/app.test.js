import React from 'react';
import { shallow } from "./enzyme.js";
import CheckIn from '../client/src/components/checkin.jsx';
import CheckOut from '../client/src/components/checkout.jsx';
import App from '../client/src/components/app.jsx';
import 'isomorphic-fetch';

describe('<App/>', () => {
    it('renders two child components', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists(CheckIn)).toBe(true);
        expect(wrapper.exists(CheckOut)).toBe(true);
    })

    it('renders a viewdeal button', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('#viewdealbutton').text()).toBe('View Deal');
    })

    it('renders a guests component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists('#guestsbutton')).toBe(true);
    })
})

it('should render checkIn button with correct text', () => {
    const wrapper = shallow(<CheckIn />)
    const button = wrapper.find('button');
    const result = button.text();

    expect(result).toBe('Check In ');
});