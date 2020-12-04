import axios from 'axios';
const KEY = '123121312312312'  /// use your youtube API key here

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key: KEY
    },
})

