import React from 'react';
import moment from 'moment';

const Day = (props) => (
    <td 
      className="day" 
      onClick={() => props.changeDate(props.day, moment.months().indexOf(props.name))}>
      
      {props.day}
    </td>
)

export default Day;