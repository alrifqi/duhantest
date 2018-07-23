<template>
  <div class="main-container">
    <div class="container" v-bind:class="{ 'two-part': showPanelPost || showPanelProfile }">
      <div class="row">
        <div class="col">
          <h5 class="title">User Lists</h5>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div>
            <table class="table">
              <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>
                  Action
                </th>
              </tr>
              </thead>

              <tbody>
              <tr v-for="data in tbodyData" :key="data.id">
                <td>{{ data.id }}</td>
                <td>{{ data.name }}</td>
                <td>{{ data.email }}</td>
                <td>
                  <button class="btn btn-primary btn-sm btn-show-post" v-on:click="showUserPosts(data)">
                    View User Post
                  </button>
                  <button class="btn btn-primary btn-sm btn-show-album" v-on:click="showUserAlbums(data)">
                    View User Album
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <UserPostsPanel v-bind:postDatas="userPostsData" v-bind:userDatas="currentUserData" v-if="showPanelPost" @openmodal="openAddPostModal"/>
    <UserAlbumPanel v-bind:albumDatas="userAlbumsData" v-bind:userDatas="currentUserData" v-if="showPanelAlbum"/>
    <UserPostAdd v-if="showPostAddModal" @close="showPostAddModal = false" v-bind:user="userDataToPostAdd"/>
  </div>
</template>

<script>
import TableComp from '@/components/TableComp'
import UserPostsPanel from '../components/UserPostsPanel'
import UserAlbumPanel from '../components/UserAlbumPanel'
import UserPostAdd from '../components/UserPostAdd'
import { getUsers, getUserPosts, getUserAlbums } from '@/utils/api'

export default {
  name: 'UsersList',
  components: {
    TableComp,
    UserPostsPanel,
    UserAlbumPanel,
    UserPostAdd
  },
  data: function () {
    return {
      theadData: ['id', 'name', 'username', 'email'],
      tbodyData: [],
      showPanelPost: false,
      showPanelProfile: false,
      showPanelAlbum: false,
      userPostsData: [],
      userAlbumsData: [],
      currentUserData: [],
      showPostAddModal: false,
      userDataToPostAdd: {}
    }
  },
  watch: {
    showPanelPost: function () {
      if (this.showPanelPost === true) {
        this.showPanelProfile = false
        this.showPanelAlbum = false
      }
    },
    showPanelAlbum: function () {
      if (this.showPanelAlbum === true) {
        this.showPanelPost = false
        this.showPanelProfile = false
      }
    },
    showPanelProfile: function () {
      if (this.showPanelProfile === true) {
        this.showPanelPost = false
        this.showPanelAlbum = false
      }
    }
  },
  mounted: function () {
    getUsers().then(response => {
      this.tbodyData = response.data
    }).catch(e => {
      console.log(e)
    })
  },
  methods: {
    showUserPosts: function (data) {
      getUserPosts(data.id).then(response => {
        this.userPostsData = response.data
        this.currentUserData = data
        this.showPanelPost = true
      }).catch(e => {
        console.log(e)
      })
    },
    showUserAlbums: function (data) {
      getUserAlbums(data.id).then(response => {
        this.userAlbumsData = response.data
        this.currentUserData = data
        this.showPanelAlbum = true
      })
    },
    openAddPostModal: function (userid, userName) {
      this.userDataToPostAdd = Object.assign({id: userid, name: userName})
      this.showPostAddModal = true
    }
  }
}
</script>

<style scoped>
  .main-container {
    display: flex;
    flex-flow: row;
  }
  .container.two-part {
    margin-left: 0px;
    margin-right: 0px;
  }
</style>
