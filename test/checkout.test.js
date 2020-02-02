import React from 'react';
import { shallow } from "./enzyme.js";
import CheckOut from '../client/src/components/checkout.jsx';
import moment from 'moment';

const clickFn = jest.fn();

describe('<CheckOut/>', () => {
    
    it('renders the current date + 5 passed in as props on default page load', () => {
        const wrapper = shallow(<CheckOut status={moment().add(5, 'days').format('l')}/>);
        const result = `Check Out ${moment().add(5, 'days').format('l')}`;
        expect(wrapper.find('button').text()).toBe(result);
    })

    it('should invoke click method when clicking checkin module calendar', () => {
        const wrapper = shallow(<CheckOut toggleCalendar={clickFn}/>);
        wrapper.find('#checkoutbutton').simulate('click');
        expect(clickFn).toHaveBeenCalled();
    })

    it('should render calendar icon to page', () => {
        const wrapper = shallow(<CheckOut />);
        let src = wrapper.find('img').prop('src');
        expect(src).toBe("https://s3.amazonaws.com/iconbros/icons/icon_pngs/000/002/702/original/calendar.png?1571288205");
    })
})