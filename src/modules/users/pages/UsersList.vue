<template>
  <div class="container">
    <div class="row">
      <div class="col">
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
              <th>Username</th>
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
              <td>{{ data.username }}</td>
              <td>{{ data.email }}</td>
              <td>
                <router-link class="btn btn-primary btn-sm" :to="{ name: 'user.posts.list', params: { id: data.id }}">
                  View User Post
                </router-link>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableComp from '@/components/TableComp'
import { getUsers } from '@/utils/api'

export default {
  name: 'UsersList',
  components: {
    TableComp
  },
  data: function () {
    return {
      theadData: ['id', 'name', 'username', 'email'],
      tbodyData: []
    }
  },
  mounted: function () {
    getUsers().then(response => {
      this.tbodyData = response.data
    }).catch(e => {
      console.log(e)
    })
  }
}
</script>
