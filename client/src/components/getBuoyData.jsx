// import BuoyJS from 'buoy-js';
import axios from 'axios';
// cors error currently
const getBuoyData = () => {
    axios('http://www.ndbc.noaa.gov/data/realtime2/46087.txt', {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
       credentials: 'same-origin',
      }).then(response => {
        console.log(response);
      })
}

export default getBuoyData; 