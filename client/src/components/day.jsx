import React from 'react';

class Day extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: null
        }
    }

    render () {
        return (
            <td className="day">
              {this.props.day}
            </td>
        )
    }
}

export default Day;