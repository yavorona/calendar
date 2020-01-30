import React from 'react';

const CheckIn = (props) => (
    <div id="checkin">
      <button id="checkinbutton" onClick={() => props.toggleCalendar('In')}>
        <img className="calendarImage" src="https://s3.amazonaws.com/iconbros/icons/icon_pngs/000/002/702/original/calendar.png?1571288205"/>
        <div className="calendarWords">
          Check In <br/><span className="date">{props.status}</span>
        </div>
      </button>
    </div>
)

export default CheckIn;