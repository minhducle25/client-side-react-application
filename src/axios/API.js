import axios from "axios";
import * as URL from "./URL";

export default function API(endPoint, method, body, token) {
  let headers = {};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return axios({
    url: `${URL.API_VOL}/${endPoint}`,
    method: method,
    data: body,
    headers: headers,
  });
}
