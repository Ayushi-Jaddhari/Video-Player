import axios from 'axios';
const KEY = 'AIzaSyB15TFEy2h4DOMIm6ddp6ECfkiKldXRubw';



export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:8,
        key:KEY
    }
})