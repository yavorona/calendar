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
            guestModToggled: false,
            guests: {
                rooms: 1,
                adults: 2,
                children: 0
            }
        }
    }

    componentDidMount() {
        fetch('/hotels' + location.pathname)
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

    changeDate (day, month) {
        if (this.state.check === 'In') {
            this.setState({
                inDate: moment().month(month).date(day).format('l'),
                calendarToggled: false
            })
        } else {
            this.setState({
                outDate: moment().month(month).date(day).format('l'),
                calendarToggled: false
            })
        }
    }

    displayCalendar (input) {
        this.setState({
            check: input,
            calendarToggled: !this.state.calendarToggled,
            guestModToggled: false
        })
    }

    displayGuestsMod () {
        this.setState({
            guestModToggled: !this.state.guestModToggled,
            calendarToggled: false
        })
    }

    updateGuests (update) {
        this.setState({
            guests: update,
            guestModToggled: false
        })
    }

    render () {
        const guests = this.state.guests;
        return (
            <div id="widget">
              <div id="main">
                <div id="views">
                  <img id="viewsimage" src="https://img.icons8.com/pastel-glyph/64/000000/person-male.png"/>
                  <h3 id="viewsheader">{this.state.current.views} people are viewing this hotel</h3>
                </div>
                <CheckIn toggleCalendar={this.displayCalendar.bind(this)} status={this.state.inDate}/>
                <CheckOut toggleCalendar={this.displayCalendar.bind(this)} status={this.state.outDate}/>
                <div id="guests">
                    <button id="guestsbutton" onClick={() => this.displayGuestsMod()}>
                        <img id="guestsimage" src="https://img.icons8.com/pastel-glyph/64/000000/person-male.png"/>
                        <div id="guestswords">
                          Guests<br/><span className="date">{`${guests.rooms} rooms, ${guests.adults} adults, ${guests.children} children`}</span>
                        </div>
                    </button>
                </div>
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
                {this.state.calendarToggled ? <Calendar changeDate={this.changeDate.bind(this)} check={this.state.check}/> : <span></span>}
                {this.state.guestModToggled ? <Guests update={this.updateGuests.bind(this)} guests={guests}/> : <span></span>}
              </div>
            </div>
        );
    }
}

export default App;