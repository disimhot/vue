<template>
  <div>
    <h5 class="display-4">Edit user</h5>
    <div v-if="!loading">
      <user-form v-model="user" />
      <button type="button" class="btn btn-primary mr-5" @click="saveUser">Save</button>
      <button type="button" class="btn btn-outline-danger" @click="deleteUser">Delete</button>
    </div>

    <div class="alert alert-warning" role="alert" v-else>Загрузка</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Edit',
  components: {
    'user-form': () => import('@/components/UserForm.vue')
  },
  data: function() {
    return {
      user: {}
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    url() {
      return 'http://localhost:3000/users/' + this.id
    },
    loading() {
      return (Object.keys(this.user).length === 0)
    }
  },
  mounted: function() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios
        .get(this.url)
        .then(response => response.data)
        .then(user => {
          this.user = user
        })
        .catch(error => {
          console.log('Error ' + error)
        })
    },
    saveUser() {
      axios
        .patch(this.url, this.user)
        .then(() => {
          this.$router.push('/users')
        })
        .catch(error => {
          console.log('Error ' + error)
        })
    },
    deleteUser() {
      axios
        .delete(this.url)
        .then(() => {
          this.$router.push('/users')
        })
        .catch(error => {
          console.log('Error ' + error)
        })
    }
  }
}
</script>