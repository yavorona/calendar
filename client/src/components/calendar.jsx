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
            </div>
        )
    }
}

export default Calendar;