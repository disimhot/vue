<template>
      <div>
        <div class="align-items-center p-3 my-3 bg-light rounded">
          <h6>Всего пользователей: {{ quantity }}</h6>
        </div>


        <v-select v-model='partitions'/>

        <table class="table table-striped table-responsive-md table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Last name</th>
              <th scope="col">Balance</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="person in list" :key='person.id'>
              <td class="index" scope="row">
                <router-link :to="'/edit/' + person.id"># {{person.id}}</router-link>
              </td>
               <td>{{ person.firstName }}</td>
              <td>{{ person.lastName }}</td>
              <td>{{ person.balance }}</td>
              <td>{{ person.email }}</td>
              <td>{{ person.address }}</td>
            </tr>
          </tbody>
        </table>
    </div>
</template>
<script>
export default {
  name: 'UserList',
  components: {
    'v-select': () => import('@/components/Vselect.vue')
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      partitions: [5, 10, 15]
    }
  },
  computed: {
    quantity() {
      return this.list.length
    }
  },

}
</script>




