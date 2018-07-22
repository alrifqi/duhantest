<template>
  <div>
    User Post
  </div>
</template>

<script>
import { getUserPosts } from '@/utils/api'
export default {
  name: 'UserPostsList',
  data: function () {
    return {
      tbodyData
    }
  },
  mounted: function () {
    console.log(this.$route.params.id)
    getUserPosts(this.$route.params.id).then(response => {
      this.tbodyData = response.data
    }).catch(e => {
      console.log(e)
    })
  }
}
</script>
