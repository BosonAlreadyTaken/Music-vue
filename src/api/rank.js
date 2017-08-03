 /*
* @Author: showa11
* @Date:   2017-08-03 15:52:27
* @Last Modified by:   showa11
* @Last Modified time: 2017-08-03 18:23:04
*/
// import jsonp from 'common/js/jsonp'
import {commonParams} from './config'
import axios from 'axios'

export function getTopList() {
  const url = '/api/getTopList'
  const data = Object.assign({}, commonParams, {
    g_tk: 5381,
    _: 1501747219904,
    uin: 0,
    platform: 'h5',
    notice: 0,
    needNewCode: 1,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getMusicList(topid) {
  const url = '/api/getMusicList'
  const data = Object.assign({}, commonParams, {
    topid,
    needNewCode: 1,
    uin: 0,
    tpl: 3,
    page: 'detail',
    type: 'top',
    platform: 'h5',
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// export function getMusicList(topid) {
//   const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
//   const data = Object.assign({}, commonParams, {
    // topid,
    // needNewCode: 1,
    // uin: 0,
    // tpl: 3,
    // page: 'detail',
    // type: 'top',
    // platform: 'h5'
//   })
//   return jsonp(url, data, options)
// }