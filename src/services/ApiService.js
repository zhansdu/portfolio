import axios from "axios";
const getLink = (link) => {
  return "http://185.195.27.207:8080/api" + link;
};
export const get = (link, params) => {
  link = getLink(link);
  let query = link;
  if (params != null && params !== undefined) {
    for (const param in params) {
      if (params[param] != null && params[param] !== undefined) {
        if (query === link) {
          query = link + "?";
        } else {
          query += "&";
        }
        query += param + "=" + params[param];
      }
    }
  }
  return axios.get(query);
};
