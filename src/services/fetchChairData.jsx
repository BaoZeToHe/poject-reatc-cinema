import RestClientData from "./resetClientData";

export const fetchCheckOut = (value) => {
  return RestClientData("post", "checkOut", value , {})
};