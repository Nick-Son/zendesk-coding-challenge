import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:7001'
})

export function getTickets() {
  return api.get('/')
    .then((res) => console.log(res.data))
}
