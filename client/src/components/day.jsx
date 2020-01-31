import React from 'react';
import moment from 'moment';

const Day = (props) => (
    <td 
      className={props.check === 'In' ? "dayin day" : "dayout day"}
      id={props.lowPrice === 1 ? "lowPrice" : "normal"}
      onClick={() => props.changeDate(props.day, moment.months().indexOf(props.name))}
      >
      {props.day}
    </td>
)

export default Day;