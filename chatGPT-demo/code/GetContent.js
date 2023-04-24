import http from 'http';
import { API_KEY } from './lib/util.js'

const APIKey = API_KEY
const Max_Tokens = 300
const Temperature = 0.8
const Model = "gpt-3.5-turbo"

export default function InputAction({searchTerm}) {
  let chatGPTQuery = "tell me a joke about " + searchTerm;
  let url = "https://api.openai.com/v1/chat/completions";
  let body = {
    model: Model,
    messages: [{ role: "user", content: chatGPTQuery }],
    max_tokens: Max_Tokens,
    temperature: Temperature,
  }
  var options = {
    format: 'json',
    headers: {
      Authorization: 'Bearer ' + APIKey,
      'Content-Type': 'application/json',
    },
    cacheTime: 0,
    setTimeout: 60000
  };
  var response = http.postUrl(
    url,
    body,
    options
  );
  return { text: response['choices'][0]['message']['content'] };
}