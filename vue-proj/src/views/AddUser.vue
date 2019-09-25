<template>
  <div>
    <h5 class="display-4">Add user</h5>
    <div v-if="id">
        <user-form v-model="user" />
        <button type="button" class="btn btn-primary" @click="saveUser">Save</button>
    </div>

    <div class="alert alert-warning" role="alert" v-else
      >Загрузка</div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Add',
  components: {
    'user-form': () => import('@/components/UserForm.vue')
  },
  data: function() {
    return {
      user: {},
      id: null,
    }
  },
  computed: {
    url() {
      return 'http://localhost:3000/users/';
    }
  },
  mounted() {
    axios.get(this.url)
      .then(response => response.data)
      .then(users => {
          this.id = users.length + 1;
      })
    .catch(error => {
      console.log('Error ' + error);
    })
  },
  methods: {
    saveUser() {
      axios
        .put(this.url + this.id, this.user)
        .then(() => {
          this.$router.push(`edit/${this.id}`)
        })
        .catch(error => {
          console.log('Error ' + error)
        })
    }
  }
}
</script>
