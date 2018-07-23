<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              Add Comment For Post : {{ post.title }}
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <form>
                <div class="form-group">
                  <label for="title">Name</label>
                  <input type="text" class="form-control" id="name" placeholder="Name" v-model="formdata.name">
                  <input type="hidden" v-bind:value="post.id" v-modal="formdata.postid"/>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input id="email" type="email" v-model="formdata.email" />
                </div>
                <div class="form-group">
                  <label for="body">Comment</label>
                  <textarea id="body" class="form-control" v-model="formdata.body"></textarea>
                </div>
              </form>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-sm btn-warning modal-default-button" @click="$emit('close')">
                Close
              </button>
              <button class="btn btn-sm btn-primary" @click="saveComment()">
                Save
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { postPostComment } from '@/utils/api'

export default {
  name: 'UserPostCommentAdd',
  props: ['post'],
  data: function () {
    return {
      formdata: [
        { postid: '' },
        { name: '' },
        { email: '' },
        { body: '' }
      ]
    }
  },
  methods: {
    saveComment: function () {
      let self = this
      postPostComment(this.formdata).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      }).finally(function () {
        self.$emit('close')
      })
    }
  }
}
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 600px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
