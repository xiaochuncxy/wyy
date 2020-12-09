import axios from 'axios'

export function getGdList() {
  let url = 'http://localhost:3001/gedan'
  return axios.get(url)
}