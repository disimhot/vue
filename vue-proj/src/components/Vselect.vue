<template>
  <div class="form-group col-4">
    <select class="form-control" id="exampleFormControlSelect" v-model="value">
      <option v-for="option in partitions_page">{{ option }}</option>
    </select>
    <label for="exampleFormControlSelect">Выбрано элементов: {{ value }}</label>
  </div>
</template>

<script>
export default {
  name: 'Vselect',
  model: {
    prop: 'partition'
  },
  props: {
    partition: {
      type: Number,
      required: true
    },
    partitions_page: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    value: ''
  }),
  mounted() {
    this.value = this.partition;
  },
  watch: {
    value() {
      this.$emit('input', Number(this.value));
    }
  }
}
</script>
  