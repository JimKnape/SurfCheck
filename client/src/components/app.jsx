import React from 'react';
import axios from 'axios';
// import getBuoyData from './getBuoyData'
import CreateCheck from './CreateCheck';
import Spots from './Spots';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: [],
      currentSpot: '',
      view: 'main',
    };
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

  render() {
    const { spots } = this.state;
    return (
      <div>
        Surf Check!
        <CreateCheck />
        <Spots spots={spots} />
      </div>
    );
  }
}
export default App;
