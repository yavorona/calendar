import React from 'react';

const GuestsRow = (props) => (
    <div id={props.name + 'buttoncontainer'}>
      <button className="decrement" onClick={() => props.update(1, props.name)}>-</button>
      <div className="roomsmodvalue"><span id="roomsmodtext">{props.value}</span></div>
      <button className="increment" onClick={() => props.update(2, props.name)}>+</button>
    </div>
)


export default GuestsRow;