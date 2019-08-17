<template>
  <div class="form-group col-4">
    <select class="form-control" id="exampleFormControlSelect" v-model="value">
      <option v-for="(option,index) in partitions" :key="index">{{ option }}</option>
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
    }
  },
  data: () => ({
    partitions: [5, 10, 15],
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

<style>
</style>
