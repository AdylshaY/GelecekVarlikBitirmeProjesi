const creditCardService = {};

const axios = require("axios").create({
  baseURL: "http://localhost:28748",
});

creditCardService.getByEmail = (url, user) => axios.get(url, user.email);

creditCardService.get = (url) => axios.get(url);
creditCardService.post = (url, data) => axios.post(url, data);
creditCardService.put = (url, data) => axios.put(url, data);
creditCardService.delete = (url, id) => axios.delete(url, id);
export default creditCardService;
