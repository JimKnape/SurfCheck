import React from 'react';
// import getBuoyData from './getBuoyData'
import CreateCheck from './CreateCheck';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Surf Check!
        <CreateCheck />
      </div>
    );
  }
}
export default App;
