import React from 'react';
import axios from 'axios';
// import getBuoyData from './getBuoyData'
import CreateCheck from './CreateCheck';
import Spots from './Spots';
import SpotReport from './SpotReport';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: [],
      currentSpot: [],
      view: 'main',
    };
    this.getSpotReports = this.getSpotReports.bind(this);
  }

  componentDidMount() {
    this.getSpots();
  }
  
  getSpots() {
    axios.get('/spots')
      .then((res) => {
        this.setState({
          spots: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  getSpotReports(event) {
    const selectedSpot = event.target.value;
    axios.get(`/spots/${selectedSpot}`)
      .then((res) => {
        this.setState({
          currentSpot: res.data,
          view: selectedSpot
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const { spots, view, currentSpot } = this.state;
    return (
      <div>
        Surf Check!
        <Spots spots={spots} getSpotReports={this.getSpotReports}/>
        <CreateCheck />
        <SpotReport view={view} currentSpot={currentSpot} />
      </div>
    );
  }
}
export default App;
