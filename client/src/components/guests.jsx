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
        <button></button>
        <div id="adults">
          Adults
        </div>
        <div id="children">
          Children
        </div>
        <div id="update">
          <button>Update</button>
        </div>
      </div>
    )
  }
}

export default Guests;