import request from './request.js';

export function userLogin() {
  let url = 'http://localhost:3000/user'
  return request.get(url)
}