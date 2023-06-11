import RestClientData from "./resetClientData";

export const fetchDataMovie = (params) => {
  return RestClientData("get", "movie", {}, params)
};

export const fetchDataEvent = (params) => {
  return RestClientData("get", "events", {}, params)
};

export const fetchDataSport = (params) => {
  return RestClientData("get", "sports", {}, params)
};