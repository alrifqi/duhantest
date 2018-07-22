import axios from 'axios'

export function getUsers () {
  return axios.get(`https://jsonplaceholder.typicode.com/users`)
}

export function getUserPosts (userid) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=` + userid)
}
