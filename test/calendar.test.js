import React from 'react';
import { shallow } from "./enzyme.js";
import Calendar from '../client/src/components/calendar.jsx';
import Month from '../client/src/components/month.jsx';
import 'isomorphic-fetch';

describe('<Calendar/>', () => {
    it('renders two child <Month /> components', () => {
        const wrapper = shallow(<Calendar />);
        expect(wrapper.exists('Month')).toBe(true);
    })

    it('renders an averageRates component', () => {
        const wrapper = shallow(<Calendar />);
        expect(wrapper.exists('#averagerates')).toBe(true);
    })
})
