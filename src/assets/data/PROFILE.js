// import Moduls
import axios from 'axios';

// Import API_LINK
import { PROFILE_API_LINK } from '../../assets/data/API';
import { MAIN_API_LINK } from '../../assets/data/API';
import { RAPID_API_KEY } from '../../assets/data/API';
import { RAPID_API_HOST } from '../../assets/data/API';


// All Data
const allData = []
export const experiences = []
export const education = []
export const certificates = []
export const languages = []
export const courses = []

const options = {
  method: 'POST',
  url: 'https://linkedin-profiles-and-company-data.p.rapidapi.com/profile-details',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'df87f6d5d4msh9e13df6b0dbd43fp1b374cjsn4bf35adf5cf3',
    'X-RapidAPI-Host': 'linkedin-profiles-and-company-data.p.rapidapi.com'
  },
  data: '{"profile_id":"khalidmomand","profile_type":"personal","contact_info":false,"recommendations":false,"related_profiles":false}'
};



axios.request(options).then(function (response) {
  allData.push(response.data)
  languages.push(allData[0].languages.profile_languages)
  certificates.push(allData[0].certifications)
  courses.push(allData[0].courses)
  education.push(allData[0].education)
  experiences.push(allData[0].position_groups)

}).catch(function (error) {
	console.error(error.message);
});




export default allData