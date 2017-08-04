import {commonParams} from './config'
import axios from 'axios'

export function getHotKey() {
  const url = '/api/getHotKey'
  const data = Object.assign({}, commonParams, {
    g_tk: 5381,
    _: 1501768821244,
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

export function getSearch() {
  const url = '/api/getSearch'
  const data = Object.assign({}, commonParams, {
    g_tk: 5381,
    _: 1501768889443,
    uin: 0,
    platform: 'h5',
    notice: 0,
    needNewCode: 1,
    format: 'json',
    w: 'jj',
    zhidaqu: 1,
    catZhida: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    perpage: 20,
    n: 20,
    p: 1,
    remoteplace: 'txt.mqq.all'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}