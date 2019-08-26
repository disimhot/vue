<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input
        type="text"
        class="form-control"
        v-model="localUser.firstName">
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input
        type="text"
        class="form-control"
        v-model="localUser.lastName">
    </div>

    <div class="form-group">
      <label>Баланс</label>
      <input
        type="text"
        class="form-control"
        v-model="localUser.balance">
    </div>

    <div class="form-group">
      <label>Электронная почта</label>
      <input
        type="text"
        class="form-control"
        v-model="localUser.email">
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input
        type="text"
        class="form-control"
        v-model="localUser.address">
    </div>

  </div>
</template>

<script>
export default {
  name: 'UserForm',
  model: {
    prop: 'user',
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localUser: {},
    accessList: ['user']
  }),
  watch: {
    localUser: {
      deep: true,
      handler: 'updateUser'
    },
    user: {
      deep: true,
      handler: 'updateLocal'
    }
  },
  mounted() {
    this.updateLocal();
  },
  methods: {
    updateUser() {
      this.$emit('input', Object.assign({}, this.localUser))
    },
    updateLocal() {
      this.localUser = Object.assign({}, this.user)
    }
  }
}
</script>
