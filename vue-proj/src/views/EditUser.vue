<template>
  <div>
    <h5 class="display-4">Edit user</h5>
    <user-form v-if="user" v-model="user" />

    <button type="button" class="btn btn-primary" @click="saveUser">Save</button>
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
      return 'http://localhost:3004/users/' + this.id
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
    }
  }
}
</script>

<style>
</style>
