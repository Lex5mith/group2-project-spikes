// This code is for v4 of the openai package: npmjs.com/package/openai
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [
    {
      "role": "system",
      "content": "You will be provided with an array of movie titles. Map over the array and return an anagram of each individual item in the array. \nEach anagram must use all the letters in the individual item.  \ndo not repeat input words in the output. Do not use any profanity. All anagrams returned must be words listed in the Oxford English Dictionary"
    },
    {
      "role": "user",
      "content": " \"Indiana Jones And The Temple Of Doom\",\n  \"The Lord Of The Rings\",\n  \"La La Land\",\n  \"Finding Nemo\",\n  \"Nightmare On Elm Street\",\n  \"The Eternal Sunshine Of The Spotless Mind\",\n  \"Akira\",\n  \"Happy Gilmore\",\n  \"Good Will Hunting\",\n  \"Moana\""
    },
    {
      "role": "assistant",
      "content": "[\"Adonis, I'm the Old Man\",\n \"Froth, the Ring's Lord\",\n \"All And\",\n \"Ming One\",\n \"The Monster's Nightmare\",\n \"The Mindless Spotless Sunshine\",\n \"Aria\",\n \"Gleam Hoppy\",\n \"Dull Night Glow\",\n \"Amona\"]"
    },
    {
      "role": "assistant",
      "content": "[\"Annoyed, I'm the Old Man\",\n \"Froth, the Ring's Lord\",\n \"All And\",\n \"Ming One\",\n \"The Monster's Nightmare\",\n \"The Mindless Spotless Sunshine\",\n \"Aria\",\n \"Gleam Hoppy\",\n \"Dull Night Glow\",\n \"Amona\"]"
    }
  ],
  temperature: 0,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});