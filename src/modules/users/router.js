import router from '../../router'

import UsersList from './pages/UsersList'
import UserPostsList from './pages/UserPostsList'

router.addRoutes([
  {
    path: '/users',
    name: 'users.list',
    component: UsersList
  }, {
    path: '/user/:id/posts',
    name: 'user.posts.list',
    component: UserPostsList
  }
])
