import React from 'react';

const CheckIn = (props) => (
    <div id="checkin">
      <button id="checkinbutton" onClick={() => props.toggleCalendar()}>
        This is the checkin mod
      </button>
    </div>
)

export default CheckIn;