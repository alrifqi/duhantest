<template>
  <div class="main-container album-panel">
    <div class="container">
      <div class="head">
        <span>Album : {{ userDatas.name }}</span>
      </div>
      <ul class="list-group">
        <li class="list-group-item photo-title" v-for="album in albumDatas" :key="album.id" v-on:click="getPhotos(album)">
          {{ album.title }}
          <div class="album-photos" v-if="showPhotos && currentAlbumIdPhotos == album.id">
            <div class="photo-item">
              <div v-for="photo in photosAlbumData" :key="photo.id">
                <img v-bind:src="photo.thumbnailUrl"/>
                <small>{{ photo.title }}</small>
              </div>
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
      photosAlbumData: [],
      currentAlbumIdPhotos: 0,
      showPhotos: false
    }
  },
  methods: {
    getPhotos: function (data) {
      this.currentAlbumIdPhotos = data.id
      this.showPhotos = true
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
  .album-photos{
    border-top: 1px solid rgba(0,0,0,.125);
    display: flex;
    flex-flow: column;
  }
  .photo-title {
    cursor: pointer;
  }
  .photo-title:hover {
    background-color: rgba(0,0,0,.125);
  }
  .photo-item {
    display: inline-grid;
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    grid-template-columns:150px 150px;
  }
</style>
