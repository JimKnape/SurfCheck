import React from 'react';

class Spots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Choose Surf Spot',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
    this.props.getSpotReports(event);
  }

  render() {
    const { spots, getSpotReports } = this.props;
    return (
      <div className="surfspotlist">
        <h2>Your Surf Spots</h2>
        <select value={this.state.value} onChange={this.handleChange}>
          {spots.map((spot) => {
            return (
              <option value={spot}>{spot}</option>
            )
          })}
        </select>
      </div>
    );
  }
}

export default Spots;
