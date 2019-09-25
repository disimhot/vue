<template>
  <div>
    <div class="align-items-center p-3 my-3 bg-light rounded">
      <h6>Всего пользователей: {{ quantity }}</h6>
    </div>
    <v-select v-model="partition" :partitions_page="partitions"/>
    <table class="table table-striped table-responsive-md table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Last name</th>
          <th scope="col">Birthday</th>
          <th scope="col">Balance</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in localList" :key="person.id">
          <td class="index" scope="row">
            <router-link :to="'/edit/' + person.id"># {{person.id}}</router-link>
          </td>
          <td>{{ person.firstName }}</td>
          <td>{{ person.lastName }}</td>
          <td>{{ person.birthdate }}</td>
          <td>{{ person.balance }}</td>
          <td>{{ person.email }}</td>
          <td>{{ person.address }}</td>
        </tr>
      </tbody>
    </table>
  <pagination :pages_quantity="pages_quantity" v-model="page"/>
  </div>
</template>
<script>
export default {
  name: 'UserList',
  components: {
    'v-select': () => import('@/components/Vselect.vue'),
    'pagination': () => import('@/components/Pagination.vue')
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      partition: 10,
      page: 1,
      partitions: [5, 10, 15]
    }
  },
  watch: {
    partition() {
      this.page = 1;
    },
  },
  computed: {
    quantity() {
      return this.list.length
    },
    pages_quantity() {
      return Math.round(this.quantity/this.partition);
    },
    localList() {
      return this.list.slice(((this.page - 1) * this.partition), (this.partition * this.page))
    }
  },
}
</script>




