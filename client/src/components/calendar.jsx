import React from 'react';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: null
        }
    }

    render () {
        return (
            <div id="calendar">
              <div id="selectdate">Select a date to continue</div> 
              <div id="firstmonth">First Month</div>
              <div id="secondmonth">Second Month</div>
              <div id="averagerates">Average daily rates</div>
            </div>
        )
    }
}

export default Calendar;