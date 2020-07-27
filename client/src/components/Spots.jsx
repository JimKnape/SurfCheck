import React from 'react';

class Spots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { spots } = this.props;
    return (
      <div className="surfspotlist">
        Your Surf Spots
        {spots.map((spot) => (
          <div key={spot.spotName}>
            <button>{spot}</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Spots;
