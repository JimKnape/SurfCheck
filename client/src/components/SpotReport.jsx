import React from 'react';
import moment from 'moment';

class SpotReport extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    showReport() {
      const {view, currentSpot } = this.props;
      if (view === 'main') {
        return (
          <div>Click on a Surf Spot to view your reports!</div>
        )
      } else {
        return (
          <div>
            <table>
              <thead>
                <tr>
                  <th >{`Reports for ${view}`}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Report Date</td>
                  <td>Rating</td>
                  <td>Surf Notes</td>
                </tr>
                {currentSpot.map((spot, idx) => {
                  return (
                    <tr key={spot.spotName + idx}>
                      <td>{moment(spot.createdAt).format('MMMM Do YYYY, h:mm')}</td>
                      <td>{spot.surfRating}</td>
                      <td>{spot.surfNotes}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )
      }
    }

    render() {
      const { view, currentSpot } = this.props
      return (
        <div>
          {this.showReport()}
        </div>
      );
    }
  }
  
  export default SpotReport;