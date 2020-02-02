import React from 'react';
import { shallow } from "./enzyme.js";
import Calendar from '../client/src/components/calendar.jsx';
import Month from '../client/src/components/month.jsx';
import moment from 'moment';

describe('<Calendar/>', () => {
    
    it('renders two child <Month /> components', () => {
        const wrapper = shallow(<Calendar />);
        expect(wrapper.find(Month)).toHaveLength(2);
    })

    it('renders an averageRates component', () => {
        const wrapper = shallow(<Calendar />);
        expect(wrapper.exists('#averagerates')).toBe(true);
    })

    it('dynamically updates state on calendar from month', () => {
        const wrapper = shallow(<Calendar min={1} max={2}/>);
        wrapper.setState({
            current: moment().month(),
            first: moment.months()[moment().month()],
            second: moment.months()[(moment().month()) + 1]
        })
        expect(wrapper.find('#averagerates').text()).toBe('Average daily rates: $1 - $2')
    })
})
