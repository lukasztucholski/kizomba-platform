import axios from 'axios';

class BaseApi {
  constructor({ baseUrl, baseParams }) {
    this.baseUrl = baseUrl;
    this.baseParams = baseParams;
  }

  getData({ endpoint = '', params = {} }) {
    return axios.get(this.baseUrl + endpoint, {
      params: { ...this.baseParams, ...params },
    });
  }
}

const myApuUrl = '';
const myApiParams = {};

export default new BaseApi({ baseUrl: myApuUrl, baseParams: myApiParams });
