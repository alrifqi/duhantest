<template>
  <div class="main-container">
    <div class="container">
      <div class="head">
        <span>Album : {{ userDatas.name }}</span>
      </div>
      <ul class="list-group">
        <li class="list-group-item" v-for="album in albumDatas" :key="album.id">
          {{ album.title }}
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
import { getPhotosAlbum } from '@/utils/api'
export default {
  name: 'UserAlbumPanel',
  props: ['userDatas', 'albumDatas'],
  data: function () {
    return {
      photosAlbumData: []
    }
  },
  methods: {
    getPhotos: function (data) {
      getPhotosAlbum(data.id).then(response => {
        this.photosAlbumData = response.data
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
</style>
