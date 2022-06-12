const apiService = {};

const axios = require("axios").create({
  baseURL: "http://localhost:20472",
});

axios.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem("user")).token;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiService.login = (model) => {
  return axios
    .post("http://localhost:80/auth/login", model)
    .then((res) => res)
    .catch((e) => null);
};

apiService.register = (model) => {
  return axios
    .post("http://localhost:80/auth/register", model)
    .then((res) => res)
    .catch((e) => null);
};

apiService.get = (url) => axios.get(url);
apiService.post = (url, data) => axios.post(url, data);
apiService.put = (url, data) => axios.put(url, data);
apiService.delete = (url, id) => axios.delete(url, id);
export default apiService;
