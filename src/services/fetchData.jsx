import RestClientData from "./resetClientData";

export const fetchDataMovie = (params) => {
  return RestClientData("get", "movie", {}, params)
};

export const fetchDataEvent = (params) => {
  return RestClientData("get", "events", {}, params)
};

export const DataChairBy = (params) => {
  return RestClientData("get", "checkOut", {}, params)
}

export const fetchDataSport = (params) => {
  return RestClientData("get", "sports", {}, params)
};
export const fetchChair = (params) => {
  return RestClientData("get", "chairs" , {} , params)
}

export const fetchDataShowTime = (params) => {
  return RestClientData("get", "showtime", {}, params)
}
