import axios from 'axios'
import store from '../../store'
import promise from 'promise'
import history from '../../history'

const getAccessToken = (state) => state.user.access_token;


const authAxios = axios.create()

authAxios.interceptors.request.use(function (request) {
  // Do something before request is sent
  const accessToken = getAccessToken(store.getState());
  if(accessToken == '' || accessToken == null || accessToken == undefined){
    history.push(`/login?redirectUrl=${window.location.href}`)
    return Promise.reject();
  }else{
    request.headers.Authorization = `Bearer ${accessToken}`
    return request;
  }
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


export const authGet = (url,obj) => authAxios.get(url,obj)
export const authPost = (url,obj) => authAxios.post(url,obj)
export const authDelete = (url,obj) => authAxios.delete(url,obj)
export const authPut = (url,obj) => authAxios.put(url,obj)

