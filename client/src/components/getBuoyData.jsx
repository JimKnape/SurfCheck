import axios from 'axios';

//getting sample data from our own server
const getBuoyData = () => {
  axios('buoydata')
    .then((data) => {
      // this allows us options to grab data from a ways back if the user doesn't have access to get req at time of logging
      console.log('will need to parse out data or use npm library')
    })
}

export default getBuoyData; 