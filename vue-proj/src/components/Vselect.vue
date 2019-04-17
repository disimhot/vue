<template>
  <div class="form-group col-4">
    <select class="form-control" id="exampleFormControlSelect" v-model="selected">
      <option v-for="option in partitions" :key="option" >{{ option }}</option>
    </select>
    <label for="exampleFormControlSelect">Выбрано элементов: {{ selected }}</label>
  </div>
</template>

<script>
export default {
  name: 'Vselect',
  model: {
    prop: 'partitions',
  },
  props: {
    partitions: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    selected: ''
  })
}
</script>

<style>

</style>
