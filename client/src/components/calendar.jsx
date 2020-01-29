import React from 'react';
import moment from 'moment';
import Month from './month.jsx';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: moment().month(),
            first: moment.months()[moment().month()],
            second: moment.months()[(moment().month()) + 1]
        }
    }

    renderFirstDay (month) {
        return moment().month(month).date(1).format("d");
    }

    getDaysInMonth (month) {
        return moment().month(month).daysInMonth();
    }

    advanceMonth () {
        const newMonth = this.state.current + 1;
        this.setState({
            current: newMonth,
            first: moment.months()[newMonth],
            second: moment.months()[newMonth + 1]
        })
    }

    render () {
        return (
            <div id="calendar">
              <div id="selectdate">Select a date to continue</div> 
              <Month id="firstmonth" name={this.state.first} firstDay={this.renderFirstDay(this.state.current)} days={this.getDaysInMonth(this.state.current)}/>
              <Month id="secondmonth" name={this.state.second} firstDay={this.renderFirstDay(this.state.current + 1)} days={this.getDaysInMonth(this.state.current + 1)}/>
              <div id="averagerates">Average daily rates</div>
            </div>
        )
    }
}

export default Calendar;