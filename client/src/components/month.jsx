import React from 'react';
import moment from 'moment';
import Day from './day.jsx';

class Month extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: null
        }
    }

    getDaysFormatted () {
        let blanks = [];
        for (let i = 0; i < this.props.firstDay; i++) {
            blanks.push(
                <td key={i} className="blank">{""}</td>
            )
        }
        let daysInMonth = [];
        for (let j = 1; j < this.props.days; j++) {
            daysInMonth.push(
                <Day key={j + this.props.firstDay} day={j}/>
            )
        }
        const totalSlots = blanks.concat(daysInMonth);
        let weeks = [];
        let days = [];
        totalSlots.forEach((day, i) => {
            if (i % 7 !== 0) {
                days.push(day);
            } else {
                weeks.push(days);
                days = [];
                days.push(day);
            }
            if (i === totalSlots.length - 1) {
                weeks.push(days);
            }
        })
        return weeks.map((week, i) => (
            <tr key={i}>{week}</tr>
        ))
    }

    render () {
        const daysToAdd = this.getDaysFormatted();
        return (
          <div id={this.props.id}>
            <div id="monthdetails"> 
              {this.props.previousMonth ? <button className="previous" onClick={() => this.props.previousMonth()}>{'<'}</button> : ''}
              &nbsp;<div id="monthname">{this.props.name} 2020</div>&nbsp;
              {!this.props.previousMonth ? <button className="next" onClick={() => this.props.advanceMonth()}>{'>'}</button> : ''}
            </div>
            <table cellSpacing="7">
              <thead id="weekdaynames">
                <tr>
                  {moment.weekdaysShort().map((name, i) => (
                      <td key={i}>{name.toUpperCase()}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {daysToAdd}
              </tbody>
            </table>
          </div>
        )
    }
}

export default Month;