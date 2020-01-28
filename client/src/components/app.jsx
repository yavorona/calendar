import React from 'react';
import Calendar from './calendar.jsx';
import CheckIn from './checkin.jsx';
import CheckOut from './checkout.jsx';
import Guests from './guests.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: {},
            current: {}
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

    render () {
        return (
            <div id="widget">
              <h1>Calendar Widget</h1>
              <div id="main">
                <div id="views">
                  <h3>{this.state.current.views} people are viewing this hotel</h3>
                </div>
                <CheckIn />
                <CheckOut />
                <Guests />
                <div id="price">
                  Lock in this low price now!<span id="pricevalue">&nbsp;${this.state.current.price}</span>
                </div>
                <div id="viewdeal"> 
                  <button id="viewdealbutton">
                    View Deal
                  </button>
                </div>
              </div>
            </div>
        );
    }
}

export default App;