import React from 'React';
import ReactDOM from 'react-dom';
import App from './App';
import HIKINGPROJECT_API_KEY from '../config/hikingproject.js';
import MAPBOX_API_KEY from '../config/mapbox.js';


ReactDOM.render(<App searchHikingProject={HIKINGPROJECT_API_KEY} searchMapbox={MAPBOX_API_KEY} />, document.getElementById('root'));