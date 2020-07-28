import React from 'react';
import moment from 'moment';
import getBuoyData from './getBuoyData';

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
                  <td rowSpan="1"></td>
                  <th colSpan="3" scope="colgroup">Your Report</th>
                  <th colSpan="4" scope="colgroup">Cape Flattery Buoy Data</th>
                  <th colSpan="4" scope="colgroup">Port Angeles Buoy Data</th>
                </tr>
                <tr>
                  <td rowSpan="1"></td>
                  <th colSpan="3" scope="colgroup"></th>
                  <th colSpan="2" scope="colgroup">Swell Data</th>
                  <th colSpan="2" scope="colgroup">Wind Data</th>
                  <th colSpan="2" scope="colgroup">Swell Data</th>
                  <th colSpan="2" scope="colgroup">Wind Data</th>
                </tr>
                <tr>
                  <td>Report Date</td>
                  <td>Rating</td>
                  <td>Surf Notes</td>
                  <td>Direction</td>
                  <td>Period</td>
                  <td>Direction</td>
                  <td>Speed</td>
                  <td>Direction</td>
                  <td>Period</td>
                  <td>Direction</td>
                  <td>Speed</td>
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
      getBuoyData()
      const { view, currentSpot } = this.props
      return (
        <div>
          {this.showReport()}
        </div>
      );
    }
  }
  
  export default SpotReport;