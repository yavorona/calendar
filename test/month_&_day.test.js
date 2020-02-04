import React from 'react';
import { shallow } from "./enzyme.js";
import Month from '../client/src/components/month.jsx';
import Day from '../client/src/components/day.jsx';
import moment from 'moment';

const onClick = jest.fn();

describe('<Month />', () => {
    
    it('renders a set amount of days based on what is passed in', () => {
        const wrapper = shallow(<Month name={moment()} days={30}/>);
        expect(wrapper.find(Day)).toHaveLength(30);
    })

    it('renders 7 days of the week as table headers', () => {
        const wrapper = shallow(<Month name={moment()}/>);
        expect(wrapper.find('td')).toHaveLength(7);
    })

    it ('correctly invokes the cycle months methods on arrow click', () => {
        const wrapper = shallow(<Month name={moment()} previousMonth={onClick} advanceMonth={onClick}/>);
        wrapper.find('.previous').simulate('click');
        wrapper.setProps({
            previousMonth: ''
        })
        wrapper.find('.next').simulate('click');
        expect(onClick).toHaveBeenCalledTimes(2);
    })
})

describe('<Day />', () => {
    it('should invoke on click method when day selected', () => {
        const wrapper = shallow(<Day changeDate={onClick}/>);
        wrapper.find('.day').simulate('click');
        expect(onClick).toHaveBeenCalled();
    })

    it('should render conditional styling on random day', () => {
        const wrapper = shallow(<Day lowPrice={1}/>);
        expect(wrapper.exists('#lowPrice')).toBe(true);
        wrapper.setProps({
            lowPrice : 3
        })
        expect(wrapper.exists('#lowPrice')).toBe(false);
    })
})