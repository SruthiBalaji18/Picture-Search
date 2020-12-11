import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 0v7q3xHre4Evox7dKXnYKFy4bKCyvNfpKeBQWfttNJQ'
        } 

});