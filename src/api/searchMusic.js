import request from './musicRequest.js';

export function searchMusic(input) {
  let url = '/search?keywords=' + input
  return request.get(url)
}

export function musicUrl(id) {
  let url = '/song/url?id=' + id
  return request.get(url)
}

export function musicDetial(id) {
  let url = '/song/detail?ids=' + id
  return request.get(url)
}