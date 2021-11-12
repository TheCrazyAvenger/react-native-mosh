import {create} from 'apisauce';
import {store as storeCache, get as getCache} from '../utility/cache';

const apiClient = create({
  baseURL: 'http://10.0.2.2:9000/api',
});

const get = apiClient.get;

// @ts-ignore
apiClient.get = async (url, params, axiosConfig) => {
  const responce = await get(url, params, axiosConfig);

  if (responce.ok) {
    storeCache(url, responce.data);
    return responce;
  }

  const data = await getCache(url);

  return data ? {ok: true, data} : responce;
};

export default apiClient;
