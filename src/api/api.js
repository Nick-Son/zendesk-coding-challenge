import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:7000'
})

export function getTickets() {
  return api.get('/')
    .then((res) => {
      console.log(res.data)
      return res.data
    })
    .catch((error) => {
      console.log(error)
    })
}
