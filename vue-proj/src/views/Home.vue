<template>
    <div>
      <users-list :list="list" v-if="list.length && haveData"></users-list>
      <div class="alert alert-primary" role="alert" v-else-if="!haveData">Пользователей нет</div>
      <div сlass="alert alert-warning" role="alert" v-else>Загрузка</div>
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
      haveData: false,
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
          if(users.length !== 0) {
            this.haveData = true;
            this.list = users;
          } else {
            this.haveData = false;
          }
        })
      .catch(error => {
        console.log('Error ' + error)
      })
    }
  }
}
</script>

