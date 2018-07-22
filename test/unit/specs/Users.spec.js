import UsersList from '@/modules/users/pages/UsersList'
import Vue from 'vue';

describe('Userslist.vue', () => {
  it('display list of users', () => {
    const Constructor = Vue.extend(UsersList)
    const UsersListPage = new Constructor().$mount()
    expect(UsersListPage.$el.textContent).to.contain('Users List')
  })
})
