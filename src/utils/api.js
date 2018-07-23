import axios from 'axios'

export function getUsers () {
  return axios.get(`https://jsonplaceholder.typicode.com/users`)
}

export function getUserPosts (userid) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
}

export function getUserPostComments (postid) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postid}/comments`)
}

export function getUserAlbums (userid) {
  return axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userid}`)
}

export function getPhotosAlbum (albumid) {
  return axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumid}`)
}

export function postUserPost (data) {
  let { title: payloadTitle, body: payloadBody, userid: payloadUserid } = data
  return axios.post(`https://jsonplaceholder.typicode.com/posts`, {
    userId: payloadUserid,
    title: payloadTitle,
    body: payloadBody
  })
}

export function postPostComment (data) {
  let { postid: payloadPostid, name: payloadName, body: payloadBody, email: payloadEmail } = data
  return axios.post(`https://jsonplaceholder.typicode.com/comments`, {
    postId: payloadPostid,
    name: payloadName,
    email: payloadEmail,
    body: payloadBody
  })
}
