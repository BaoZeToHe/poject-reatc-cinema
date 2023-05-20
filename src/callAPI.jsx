import axios from "axios";

const restClient = (method, endPoint, params, data) =>
  axios({
    method,
    url: `http://localhost:3000/${endPoint}`,
    data,
    params,
  })
    .then((res) => res)
    .catch((err) => err);

export default restClient;