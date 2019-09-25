<template>
  <div>
      <input type="text" :value="value" class="form-control">
  </div>
</template>

<script>
export default {
    name: 'Datepicker',
    props: {
        value: String,
        required: true
    },
    mounted() {
        
    },
}
</script>
