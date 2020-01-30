import React from 'react';
import { shallow } from "./enzyme.js";
import CheckIn from '../client/src/components/checkin.jsx';

it('should render checkIn button with correct text', () => {
    const wrapper = shallow(<CheckIn />)
    const button = wrapper.find('button');
    const result = button.text();

    expect(result).toBe('Check In ');
});