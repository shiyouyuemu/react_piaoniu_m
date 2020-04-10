import axios from "axios"
import qs from "qs"
const get = function({url,params={},headers}){
  axios.defaults.withCredentials = true;
    return axios.get(url,{
      params,
      headers,
      withCredentials:true
    }).then(res=>{
      return res.data
    }).catch(error=>{
      return error
    })
  }
const post=function({url,params={}}){

  return axios.post(url,qs.stringify(params))
  .then(function(res){
    return res.data
  }).catch(function(error){
    return error
  })
}
  export { get,post }