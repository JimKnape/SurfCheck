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
            <table><caption>{`User reports for ${view}`}</caption>
              <thead>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="2" ></td>
                  <th colSpan="2" rowSpan="2" scope="colgroup">Your Reports</th>
                  <th colSpan="5" scope="colgroup">Cape Flattery Buoy Data</th>
                  <th colSpan="5" scope="colgroup">Port Angeles Buoy Data</th>
                </tr>
                <tr>
                  <th colSpan="3" scope="colgroup">Swell Data</th>
                  <th colSpan="2" scope="colgroup">Wind Data</th>
                  <th colSpan="3" scope="colgroup">Swell Data</th>
                  <th colSpan="2" scope="colgroup">Wind Data</th>
                </tr>
                <tr>
                  <td>Report Date</td>
                  <td>Rating</td>
                  <td>Surf Notes</td>
                  <td>Height</td>
                  <td>Direction</td>
                  <td>Period</td>
                  <td>Speed</td>
                  <td>Direction</td>
                  <td>Height</td>
                  <td>Direction</td>
                  <td>Period</td>
                  <td>Speed</td>
                  <td>Direction</td>
                </tr>
                {currentSpot.map((spot, idx) => {
                  return (
                    <tr key={spot.spotName + idx}>
                      <td>{moment(spot.createdAt).format('MMMM Do YYYY, h:mm')}</td>
                      <td>{spot.surfRating}</td>
                      <td>{spot.surfNotes}</td>
                      <td>8 ft</td>
                      <td>WNW</td>
                      <td>8s</td>
                      <td>4 mph</td>
                      <td>South</td>
                      <td>4.5 ft</td>
                      <td>WNW</td>
                      <td>8 s</td>
                      <td>O mph</td>
                      <td>South</td>
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