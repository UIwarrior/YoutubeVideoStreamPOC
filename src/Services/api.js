import axios from 'axios';
const KEY = 'AIzaSyAFWzit21ruZ4xOjrFwk6RBmx7dBEt7Q-4';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key: KEY
    },
})

