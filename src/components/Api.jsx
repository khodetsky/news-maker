import axios from 'axios';;
// const axios = require('axios');

const PIXABEY_KEY = '28393009-563cada9a4af8f72bfd4d9668';
const PIXABEY_HTTP = 'https://pixabay.com/api/';
const NEWS_HTTP = 'https://jsonplaceholder.typicode.com/posts';

export async function getNewsData(page) {
    let beginningRequestNews;
    let endRequestNews;
    let news = [];

    switch (page) {
        case 1:
            beginningRequestNews = 1;
            endRequestNews = 12;
            break;
        case 2:
            beginningRequestNews = 13;
            endRequestNews = 24;
            break;
        case 3:
            beginningRequestNews = 25;
            endRequestNews = 36;
            break;
        case 4:
            beginningRequestNews = 37;
            endRequestNews = 48;
            break;
        case 5:
            beginningRequestNews = 49;
            endRequestNews = 60;
            break;
        case 6:
            beginningRequestNews = 61;
            endRequestNews = 72;
            break;
        case 7:
            beginningRequestNews = 73;
            endRequestNews = 84;
            break;
        case 8:
            beginningRequestNews = 85;
            endRequestNews = 96;
            break;
        case 9:
            beginningRequestNews = 97;
            endRequestNews = 100;
            break;
    
        default:
            break;
    }
    try {
      for (let i = beginningRequestNews; i <= endRequestNews; i++) {
        const response = await axios.get(`${NEWS_HTTP}/${i}`);
        news.push(response.data)
      }
        return news;
  } catch (error) {
      console.log(error)
  }   
};

export async function getNewsImages(page) {
    const params = {
        key: PIXABEY_KEY,
        category: "travel",
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        per_page: 12,
        page: `${page}`,
    }
    const searchParams = new URLSearchParams(params);
  try {
      const response = await axios.get(`${PIXABEY_HTTP}?${searchParams}`);
        return response.data.hits;
  } catch (error) {
      console.log(error)
  }   
};
