<template>
    <div>
      <users-list :list="list" v-if="list.length"></users-list>
      <div сlass="alert alert-warning" v-else>Загрузка</div>
    </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList.vue'

export default {
  name: 'Home',
  components: {
    'users-list': UserList
  },
  data: function() {
    return {
      list: []
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      axios.get('http://localhost:3004/users')
        .then(response => response.data)
        .then(users => {
          this.list = users
        })
    }
  }
}
</script>

