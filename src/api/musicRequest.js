import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://autumnfish.cn',
  headers: {
    // 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606792758695071737380865","bc":"440100"}',
    // 'X-Host': 'mall.film-ticket.film.list'
  }
});



export default instance