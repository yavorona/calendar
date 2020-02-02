import React from 'react';
import { shallow } from "./enzyme.js";
import CheckIn from '../client/src/components/checkin.jsx';
import moment from 'moment';

const clickFn = jest.fn();

describe('<CheckIn/>', () => {
    
    it('renders the current date passed in as props on default page load', () => {
        const wrapper = shallow(<CheckIn status={moment().format('l')}/>);
        const result = `Check In ${moment().format('l')}`;
        expect(wrapper.find('button').text()).toBe(result);
    })

    it('should invoke click method when clicking checkin module calendar', () => {
        const wrapper = shallow(<CheckIn toggleCalendar={clickFn}/>);
        wrapper.find('#checkinbutton').simulate('click');
        expect(clickFn).toHaveBeenCalled();
    })

    it('should render calendar icon to page', () => {
        const wrapper = shallow(<CheckIn />);
        let src = wrapper.find('img').prop('src');
        expect(src).toBe("https://s3.amazonaws.com/iconbros/icons/icon_pngs/000/002/702/original/calendar.png?1571288205");
    })
})