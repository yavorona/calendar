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
              <h3>This is a test</h3>
              <h3>This is a test</h3>
              <h3>This is a test</h3>
              <h3>This is a test</h3>
            </div>
        )
    }
}

export default Calendar;