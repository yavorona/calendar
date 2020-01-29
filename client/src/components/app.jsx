import React from 'react';
import Calendar from './calendar.jsx';
import CheckIn from './checkin.jsx';
import CheckOut from './checkout.jsx';
import Guests from './guests.jsx';
import moment from 'moment';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check: null,
            inDate: moment().format('l'),
            outDate: moment().add(5, 'days').format('l'),
            hotels: {},
            current: {},
            calendarToggled: false,
            guestModToggled: false
        }
    }

    componentDidMount() {
        fetch('/hotels')
          .then((response) => {
              return response.json()
          })
          .then((jsonResponse) => {
              this.setState({
                  hotels: jsonResponse,
                  current: jsonResponse[0]
              })
          })
    }

    displayCalendar (input) {
        this.setState({
            check: input,
            calendarToggled: !this.state.calendarToggled
        })
    }

    displayGuestsMod () {
        this.setState({
            guestModToggled: !this.state.guestModToggled
        })
    }

    render () {
        return (
            <div id="widget">
              <div id="main">
                <div id="views">
                  <h3>{this.state.current.views} people are viewing this hotel</h3>
                </div>
                <CheckIn toggleCalendar={this.displayCalendar.bind(this)} status={this.state.inDate}/>
                <CheckOut toggleCalendar={this.displayCalendar.bind(this)} status={this.state.outDate}/>
                <Guests />
                <div id="price">
                  Lock in this low price now!&nbsp;<span id="pricevalue">${this.state.current.price}</span>
                </div>
                <div id="cancellation">
                  <img id= "check" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ811szpbF26wqbIcFDtYyrmlAeXAvdkBpveIuzjc59QMcAvDFL&s"></img>Free cancellation for {this.state.current.daysToCancel} days
                </div>
                <div id="viewdeal"> 
                  <button id="viewdealbutton">
                    View Deal
                  </button>
                </div>
              </div>
              <div id="calendarview">
                {this.state.calendarToggled ? <Calendar /> : <span></span>}
              </div>
            </div>
        );
    }
}

export default App;