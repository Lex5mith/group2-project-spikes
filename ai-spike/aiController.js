// This code is for v4 of the openai package: npmjs.com/package/openai
// Authorization: Bearer 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
const { fetchRandomBook } = require("./randomBook");

const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

const fetchAnagrams = async (request, response, next) => {
  const { inputString } = request.body;

  const openAIResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You will be provided with an array of movie titles. Map over the array and return an anagram of each individual item in the array. \nEach anagram must use all the letters in the individual item.  \ndo not repeat input words in the output. Do not use any profanity. All anagrams returned must be words listed in the Oxford English Dictionary",
      },
      {
        role: "user",
        content: inputString,
      },
    ],
    temperature: 0,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return response.status(200).send(openAIResponse);
};

const getRandomBookAndAnagram = async (request, response, next) => {
  const randomBookName = await fetchRandomBook();

  console.log(randomBookName.title);

  const openAIResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You will be provided with a book title. Return an anagram of the book title. The anagram must use all the letters in the original title, and use each letter the same number of times that it appears in the original title.  \nDo not repeat input words in the output. Do not use any profanity. All anagram words returned must be words listed in the Oxford English Dictionary",
      },
      {
        role: "user",
        content: randomBookName.title,
      },
    ],
    temperature: 0,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const res = {
    original: randomBookName.title,
    anagram: openAIResponse.choices[0].message.content,
  };

  return response.status(200).send(res);
};

module.exports = {
  fetchAnagrams,
  getRandomBookAndAnagram,
};
