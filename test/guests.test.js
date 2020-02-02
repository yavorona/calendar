import React from 'react';
import { shallow, mount } from "./enzyme.js";
import Guests from '../client/src/components/guests.jsx';
import GuestsRow from '../client/src/components/guestsrow.jsx';

const mockFn = (input) => {
    input.setState({
        guests: {
            rooms: 2,
            adults: 2,
            children: 0
        }
    })
}

const onClick = jest.fn();

describe('<Guests />', () => {
    it('updates state after a form update', () => {
        const wrapper = shallow(<Guests guests={{
                rooms: 1,
                adults: 2,
                children: 0
            }}/>);
        mockFn(wrapper);
        expect(wrapper.state('guests')).toEqual({
            rooms: 2,
            adults: 2,
            children: 0
        })
    })

    it('renders 3 guest row components', () => {
        const wrapper = shallow(<Guests guests={{
                rooms: 1,
                adults: 2,
                children: 0
            }}/>);
        expect(wrapper.find(GuestsRow)).toHaveLength(3);
    })

    it('invokes on click from guests row', () => {
        const wrapper = shallow(<GuestsRow update={onClick}/>);
        wrapper.find('.decrement').simulate('click')
        wrapper.find('.increment').simulate('click')
        expect(onClick).toHaveBeenCalledTimes(2);
    })
})