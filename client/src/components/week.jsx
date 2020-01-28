import React from 'react';
import Day from './day.jsx';

const Week = (props) => (
    <tr>
      {[0, 1, 2, 3, 4, 5, 6].map((day, i) => (
          <Day key={i} day={day}/>
      ))}
    </tr>
)

export default Week;
