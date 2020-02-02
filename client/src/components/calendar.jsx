import React from 'react';
import moment from 'moment';
import Month from './month.jsx';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: moment().month(),
            first: moment(),
            second: moment().add(1, 'months')
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
            first: moment().month(newMonth),
            second: moment().month(newMonth + 1)
        })
    }

    previousMonth () {
        const newMonth = this.state.current - 1;
        if (moment().month(newMonth).isBefore(moment())) {
            return;
        }
        this.setState({
            current: newMonth,
            first: moment().month(newMonth),
            second: moment().month(newMonth + 1)
        })
    }

    render () {
        return (
            <div id="calendar">
              <div id="selectdate">
                Select a date to continue
                <div id="lowestpriced">
                  <span id="legendDot"></span>
                  Lowest priced dates
                </div>
              </div> 
              <Month
                    id="firstmonth"
                    month={this.state.current}
                    name={this.state.first} 
                    firstDay={this.renderFirstDay(this.state.current)} 
                    days={this.getDaysInMonth(this.state.current)}
                    previousMonth={this.previousMonth}
                    changeDate={this.props.changeDate}
                    check={this.props.check}
                />
              <Month
                    id="secondmonth"
                    month={this.state.current + 1}
                    name={this.state.second} 
                    firstDay={this.renderFirstDay(this.state.current + 1)} 
                    days={this.getDaysInMonth(this.state.current + 1)}
                    advanceMonth={this.advanceMonth}
                    changeDate={this.props.changeDate}
                    check={this.props.check}
                />
              <div id="averagerates">Average daily rates: ${this.props.min} - ${this.props.max}</div>
            </div>
        )
    }
}

export default Calendar;