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
            guests: '1 room, 2 adults, 0 children'
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

    render () {
        return (
            <div id="widget">
              <div id="main">
                <div id="views">
                  <h3>{this.state.current.views} people are viewing this hotel</h3>
                </div>
                <CheckIn toggleCalendar={this.displayCalendar.bind(this)} status={this.state.inDate}/>
                <CheckOut toggleCalendar={this.displayCalendar.bind(this)} status={this.state.outDate}/>
                <div id="guests">
                    <button id="guestsbutton" onClick={() => this.displayGuestsMod()}>
                        <div id="guestsimageformat">
                          <img id="guestsimage" src="data:image/jpeg;base64,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"/>
                        </div>
                        <div id="guestswords">
                          Guests<br/><span className="date">{this.state.guests}</span>
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
                {this.state.guestModToggled ? <Guests /> : <span></span>}
              </div>
            </div>
        );
    }
}

export default App;