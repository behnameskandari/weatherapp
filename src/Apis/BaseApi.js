import { API } from "./API";
export class BaseApi extends API {
  static GET_COLLECTION = "/";

  static async get(extraParams = {}) {
    return this.makeGet(this.GET_COLLECTION, extraParams)
      .then(({ data }) => {
        return Promise.resolve({
          response: data,
        });
      })
      .catch((error) => {
        return Promise.resolve({
          error,
        });
      });
  }
}
