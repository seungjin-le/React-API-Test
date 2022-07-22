import Axios from 'axios';
export {EndPoint} from './AxiosMap'

export const HttpMethod = {
  DELETE: 'delete',
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
};

// const instance = Axios.create({
//     baseUR: '/',
//     Accept: 'application/json',
//     headers: {'Cache-Control': 'no-cache'},
//     adapter: throttleAdapterEnhancer(cacheAdapterEnhancer(Axios.defaults.adapter)),
// })


export default class GunbanAdminAxios {
  static request({data, method, url}) {
    try {
      if (!method || !url) {
        throw new Error('omoAdminAPI needs url and method');
      }
      const api = GunbanAdminApiMap[method][url];
      if (api === undefined) {
        throw new Error(`omoAdminAPI does not have the mapping ${method}, ${url}`);
      }

      if (method === HttpMethod.GET) {
        if (data) {
          url = url + '?' + Object.keys(data).map(key => key + '=' + data[key]).join('&');
        }
        return Axios.get(url, {
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Access-Token': getJwt(),
          },
        });
      }
      if (method === HttpMethod.POST) {
        return Axios.post(url, data, {
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Access-Token': getJwt(),
          },
        });
      }

      if (method === HttpMethod.DELETE) {
        if (data) {
          url = url + '?' + Object.keys(data).map(key => key + '=' + data[key]).join('&');
        }
        return Axios.delete(url, {
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Access-Token': getJwt(),
          },
        });
      }

      if (method === HttpMethod.PUT) {
        return Axios.put(url, data, {
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Access-Token': getJwt(),
          },
        });
      }

      if (method === HttpMethod.PATCH) {
        if (data && data.idx) {
          url = url + `/${data.idx}`;
        }
        return Axios.patch(url, data, {
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Access-Token': getJwt(),
          },
        });
      }
    } catch
      (err) {
      return 'axios cannot be created';
    }
  }
}