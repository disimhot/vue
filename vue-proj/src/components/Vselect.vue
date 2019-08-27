<template>
  <div class="form-group col-4">
    <select class="form-control mb-3" id="exampleFormControlSelect" :value="partition" @change="updateData($event.target.value)">
      <option v-for="option in partitions_page" >{{ option }}</option>
    </select>
    <label for="exampleFormControlSelect">Выбрано элементов: {{ partition }}</label>
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
  methods: {
    updateData(value){
      this.$emit('input', Number(value));
    }
  }
}
</script>
  