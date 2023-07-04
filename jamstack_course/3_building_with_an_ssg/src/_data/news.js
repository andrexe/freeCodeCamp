const axios = require('axios');
require('dotenv').config();

module.exports = async function() {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.API_KEY}&pageSize=5&category=technology`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}