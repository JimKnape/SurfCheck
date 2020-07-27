import React from 'react';
import moment from 'moment';

class CreateCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spotName: '',
      surfRating: 0,
      surfNotes: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { spotName, surfRating, surfNotes } = this.state;
    return (
      <div className="createsurfcheck">
        <div className="cratesurfcheckeditor">
          <h2>Surf Check</h2>
          <form>
            <label>
              Spot Name
              <input className="create-input" type="text" name="spotName" value={spotName} placeholder="Surf Spot Name" onChange={this.handleChange}/>
            </label>
            <label>
                Surf Rating
              <select value={surfRating} onChange={this.handleChange}>
                <option name="unsurfable" value="unsurfable">Unsurfable</option>
                <option name="poor" value="poor">Poor</option>
                <option name="average" value="average">Average</option>
                <option name="good" value="good">Good</option>
                <option name="all-time" value="all-time">All Time</option>
              </select>
            </label>
            <label>
              Notes
              <input className="create-input" type="text area" name="surfNotes" value={surfNotes} placeholder="Surf Notes" onChange={this.handleChange}/>
            </label>
            <button type="submit">Log Surf Check</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateCheck;
