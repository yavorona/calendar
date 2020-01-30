import React from 'react';

const CheckOut = (props) => (
    <div id="checkout">
      <button id="checkoutbutton" onClick={() => props.toggleCalendar('Out')}>
        <img className="calendarImage" src="https://s3.amazonaws.com/iconbros/icons/icon_pngs/000/002/702/original/calendar.png?1571288205"/>
        <div className="calendarWords">
          Check Out <br/><span className="date">{props.status}</span>
        </div>
      </button>
    </div>
)

export default CheckOut;