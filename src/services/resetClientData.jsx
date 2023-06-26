import axios from "axios";
import { baseUrl } from "../contact";
import { createBrowserHistory } from "history";
import { getLocalLogin } from "../untill/loginLocal";

const history = createBrowserHistory();
const token = getLocalLogin();

export default function restClientData(method, url, data = {}, params = {}) {
  return axios({
    method, 
    url: `${baseUrl}/${url}`,
    data,
    params,
    headers: { authorization: `Bearer ${token}` },
  })
    .then((res) => {
      return res.data;
    })
    .catch((res) => {
      return Promise.reject(res);
    });
}
