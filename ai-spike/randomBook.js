const axios = require("axios");

const fetchRandomBook = async () => {
  const book = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=the+subject:thriller&key=AIzaSyAEYFJ2JedVzUf7coeHTEl8PBH2JAjxPhY"
  );

  return {
    title: book.data.items[6].volumeInfo.title,
  };
};

module.exports = { fetchRandomBook };

// key = AIzaSyAEYFJ2JedVzUf7coeHTEl8PBH2JAjxPhY;
