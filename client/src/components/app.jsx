import React from 'react';
import Calendar from './calendar.jsx';
import CheckIn from './checkin.jsx'
import CheckOut from './checkout.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotel: null
        }
    }

    componentDidMount() {
        fetch('/hotels')
          .then((response) => {
              return response.json()
          })
          .then((jsonResponse) => {
              console.log(jsonResponse);
          })
    }

    render () {
        return (
            <div id="widget">
              <h1>Calendar Widget</h1>
              <div id="main">
                <div id="views">
                  <h3>This is the views section</h3>
                </div>
                <CheckIn />
                <CheckOut />
                <button id="guests">
                    Guests
                </button>
                <div id="price">
                  <h3>This is the Price</h3>
                </div>
                <button id="viewdeal">
                  View Deal
                </button>
              </div>
            </div>
        );
    }
}

export default App;