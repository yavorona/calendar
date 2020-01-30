import React from 'react';
import GuestsRow from './guestsrow.jsx';

class Guests extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guests: this.props.guests
    }
    this.updateForm = this.updateForm.bind(this);
  }

  updateForm (side, input) {
    if (side === 1) {
      const newState = this.state.guests;
      newState[input] = this.state.guests[input] - 1;
      this.setState({
        guests: newState
      })
    } else {
      const newState = this.state.guests;
      newState[input] = this.state.guests[input] + 1;
      this.setState({
        guests: newState
      })
    }
  }

  render () {
    return (
      <div id="guestsmod">
        <div id="roomstitle">
          <img className="guestsmodimage" src="https://img.icons8.com/material-rounded/50/000000/occupied-bed.png"/>
          Rooms
        </div>
        <GuestsRow 
          name={'rooms'} 
          value={this.state.guests.rooms}
          update={this.updateForm}
        />
        <div id="adultstitle">
          <img className="guestsmodimage" id="adultsmodimage" src="https://img.icons8.com/material-two-tone/50/000000/person-male.png"/>
          Adults
        </div>
        <GuestsRow 
          name={'adults'} 
          value={this.state.guests.adults}
          update={this.updateForm}
        />
        <div id="childrentitle">
          <img className="guestsmodimage" src="https://img.icons8.com/material/24/000000/children.png"/>
          Children
        </div>
        <GuestsRow 
          name={'children'} 
          value={this.state.guests.children}
          update={this.updateForm}
        />
        <div id="updatebuttoncontainer">
          <button id="updatebutton" onClick={() => this.props.update(this.state.guests)}>Update</button>
        </div>
      </div>
    )
  }
}

export default Guests;