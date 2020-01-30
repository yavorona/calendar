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
        this.advanceMonth = this.advanceMonth.bind(this);
        this.previousMonth = this.previousMonth.bind(this);
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

    previousMonth () {
        const newMonth = this.state.current - 1;
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
              <Month
                    id="firstmonth"
                    name={this.state.first} 
                    firstDay={this.renderFirstDay(this.state.current)} 
                    days={this.getDaysInMonth(this.state.current)}
                    previousMonth={this.previousMonth}
                    changeDate={this.props.changeDate}
                    check={this.props.check}
                />
              <Month
                    id="secondmonth"
                    name={this.state.second} 
                    firstDay={this.renderFirstDay(this.state.current + 1)} 
                    days={this.getDaysInMonth(this.state.current + 1)}
                    advanceMonth={this.advanceMonth}
                    changeDate={this.props.changeDate}
                    check={this.props.check}
                />
              <div id="averagerates">Average daily rates</div>
            </div>
        )
    }
}

export default Calendar;