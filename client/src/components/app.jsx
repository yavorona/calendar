import React from 'react';
import Calendar from './calendar.jsx';
import Views from './views.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotel: null
        }
    }

    componentDidMount() {
        fetch('/hotels')
          .then((response) => {
              return response.json()
          })
          .then((jsonResponse) => {
              console.log(jsonResponse);
          })
    }

    render () {
        return (
            <div id="main">
              <Views />
              <h1>Calendar</h1>
              <Calendar />
            </div>
        );
    }
}

export default App;