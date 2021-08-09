import axios from "axios";

export class API {
  static APPID = process.env.REACT_APP_API_APP_ID;
  static APP_HOST = process.env.REACT_APP_API_HOST;

  static async makeGet(url, params = {}, config = {}) {
    return axios.get(`${this.APP_HOST}${url}`, {
      ...config,
      params: {
        APPID: this.APPID,
        ...params,
      },
    });
  }
}
