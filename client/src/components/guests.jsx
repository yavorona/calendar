import React from 'react';

class Guests extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: null
    }
  }

  render () {
    return (
      <div id="guestsmod">
        <div id="roomstitle">
          Rooms
        </div>
        <div id="roomsbuttoncontainer">
          <button id="roomsbutton"></button>
        </div>
        <div id="adultstitle">
          Adults
        </div>
        <div id="adultsbuttoncontainer">
          <button id="adultsbutton"></button>
        </div>
        <div id="childrentitle">
          Children
        </div>
        <div id="childrenbuttoncontainer">
          <button id="childrenbutton"></button>
        </div>
        <div id="updatebuttoncontainer">
          <button id="updatebutton">Update</button>
        </div>
      </div>
    )
  }
}

export default Guests;