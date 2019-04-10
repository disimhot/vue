<template>
      <div id="users-component">
        <table class="table table-striped table-responsive-md">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Last name</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(person, index) in list" :key="index">
              <td scope="row">{{ person.name }}</td>
              <td>{{ person.lastName }}</td>
              <td>{{ person.email }}</td>
              <td>{{ person.address }}</td>
            </tr>
          </tbody>
        </table>
        <footer>
          <div class="footer" id="footer">
              <div class="container">
                  <div class="row">
                    <h6>Всего пользователей: {{ quantity }}</h6>
                  </div>
              </div>
          </div>
        </footer>
    </div>
</template>
<script>
export default {
  name: 'UserList',
  template: '#users-component',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  computed: {
    quantity() {
      return this.list.length
    }
  }
}
</script>


