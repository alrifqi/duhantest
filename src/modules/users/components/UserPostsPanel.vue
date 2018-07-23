<template>
  <div class="main-container post-panel">
    <div class="container">
      <div class="head">
        <span>List Posts User : {{ userDatas.name }}</span>
        <button class="btn btn-primary btn-sm" @click="$emit('openmodal', userDatas.id, userDatas.name)">New Post</button>
      </div>
      <ul class="list-group">
        <li class="list-group-item post-title" v-bind:class="{ 'post-title-expaned': showComment && currentPostIdComment == post.id }" v-for="post in postDatas" :key="post.id" v-on:click="getPostComment(post.id)">
          {{ post.title }}
          <div class="post-comment" v-if="showComment && currentPostIdComment == post.id">
            <div class="comment" v-for="comment in postCommentsList" :key="comment.id">
              <div class="name"><span>Name:</span> {{ comment.name }}</div>
              <div class="email"><span>Email:</span> {{ comment.email }}</div>
              <div class="body">{{ comment.body }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getUserPostComments } from '@/utils/api'
export default {
  name: 'UserPostsPanel',
  props: ['postDatas', 'userDatas'],
  data: function () {
    return {
      showComment: false,
      currentPostIdComment: 0,
      postCommentsList: []
    }
  },
  methods: {
    getPostComment: function (postid) {
      getUserPostComments(postid).then(response => {
        this.postCommentsList = response.data
        this.showComment = true
        this.currentPostIdComment = postid
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style scoped>
  .main-container {
    margin-right: auto;
    margin-left: auto;
    background-color: #fafafa;
  }
  .head {
    margin: 10px 0;
    font-weight: 600;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }
  .post-comment {
    border-top: 1px solid rgba(0,0,0,.125);
    display: flex;
    flex-flow: column;
  }
  .comment {
    display: flex;
    flex-flow: column;
    padding: 5px 10px;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 10px;
    margin: 2px 0;
  }
  .comment > .name, .comment > .email{
    font-size: 12px;
  }
  .comment  span {
    font-weight: 600;
  }
  .post-title {
    cursor: pointer;
  }
  .post-title:hover {
    background-color: rgba(0,0,0,.125);
  }
  .post-title-expaned:hover {
    background-color: white;
  }
</style>
