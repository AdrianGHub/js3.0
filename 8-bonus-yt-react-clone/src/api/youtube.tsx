import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3?',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyAtPYHoq5zCU6bIxVX8q28glXvhe1GSL-0'
    }
});