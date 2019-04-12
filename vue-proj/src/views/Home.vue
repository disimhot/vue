<template>
    <div>
      <div сlass="alert alert-warning" role="alert" v-if="loading">Загрузка</div>
      <div v-else>
        <div class="alert alert-primary" role="alert" v-if="usersListEmpty">Пользователей нет</div>
        <users-list :list="list" v-else></users-list>
      </div>
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
      list: [],
      loading: true,
    }
  },
  computed: {
    usersListEmpty(){
      return this.list.length === 0 ? true : false;
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
            this.list = users;
            this.loading = false;
        })
      .catch(error => {
        console.log('Error ' + error)
      })
    }
  }
}
</script>

