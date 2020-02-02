import React from 'react';
import { shallow } from "./enzyme.js";
import CheckIn from '../client/src/components/checkin.jsx';
import CheckOut from '../client/src/components/checkout.jsx';
import App from '../client/src/components/app.jsx';
import Calendar from '../client/src/components/calendar.jsx';
import Guests from '../client/src/components/guestsrow.jsx';
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

    it('renders a guests button component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists('#guestsbutton')).toBe(true);
    })

    it('should not render guests or calendar on initial page load', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists(Calendar)).toBe(false);
        expect(wrapper.exists(Guests)).toBe(false);
    })

    it('should render a priced passed in from the database as props', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({current: {
            price: 167
        }})
        expect(wrapper.find("#price").text()).toBe("Lock in this low price now!\u00a0$167")
    })
})
