import React from 'react';

const CheckOut = (props) => (
    <div id="checkout">
      <button id="checkoutbutton" onClick={() => props.toggleCalendar()}>
        This is the checkout mod
      </button>
    </div>
)

export default CheckOut;