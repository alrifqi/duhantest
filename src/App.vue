<template>
  <div id="app">
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">Duhantest</h5>
      <nav class="my-2 my -md-0 mr-md-3">
        <router-link to="/" class="p-2 text-dark">Users</router-link>
        <router-link to="/" class="p-2 text-dark">Posts</router-link>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
