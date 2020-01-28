import React from 'react';
import moment from 'moment';
import Week from './week.jsx';

const Month = (props) => (
    <div id={props.id}>
      <div id="monthname">{props.name} 2020</div>
      <div id="weekdaynames">{moment.weekdaysShort().join(' ').toUpperCase()}</div>
      <table cellSpacing="10">
        <tbody>
            {[1, 2, 3, 4, 5].map((week, i) => (
                <Week key ={i} week={week} firstDay={props.firstDay} days={props.days}/>
            ))}
        </tbody>
      </table>
    </div>
)

export default Month;