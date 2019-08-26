<template>
    <div>
      <div class="alert alert-warning" role="alert" v-if="loading"
      >Загрузка</div>
      <div class="alert alert-primary" role="alert" v-else-if="usersListEmpty"
      >Пользователей в списке нет</div>

      <users-list :list="list" v-else></users-list>
    </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList.vue'

export default {
  name: 'Users',
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
      return this.list.length === 0;
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      axios.get('http://localhost:3000/users')
        .then(response => response.data)
        .then(users => {
            this.list = users;
            this.loading = false;
        })
      .catch(error => {
        console.log('Error ' + error);
        this.loading = false;
      })
    }
  }
}
</script>

