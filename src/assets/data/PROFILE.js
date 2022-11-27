// import Moduls
import axios from 'axios';

// Import API_LINK
import { PROFILE_API_LINK } from '../../assets/data/API';
import { MAIN_API_LINK } from '../../assets/data/API';
import { RAPID_API_KEY } from '../../assets/data/API';
import { RAPID_API_HOST } from '../../assets/data/API';


// All Data
const allData = []
const experiences = []
const education = []
const certificates = []
const languages = []
const courses = []


const options = {
  method: 'GET',
  url: MAIN_API_LINK,
  params: {url: PROFILE_API_LINK},
  headers: {
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host':RAPID_API_HOST,
  }
};

axios.request(options).then(function (response) {
	allData.map(item => console.log(item))
}).catch(function (error) {
	console.error(error);
});



export default allData