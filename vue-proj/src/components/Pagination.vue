<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        :class="{'active': page_item === page}"
        v-for="page_item in pages"
        :key="page_item"
      >
        <a class="page-link" href="#">{{ page_item }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination',
  model: {
    prop: 'page'
  },
  props: {
    page: {
      type: Number,
      required: true
    },
    pages_quantity: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    pages: []
  }),
  watch: {
    pages_quantity() {
      this.setPages()
    }
  },
  mounted() {
    this.setPages()
  },
  methods: {
    setPages() {
      this.pages = [...Array(this.pages_quantity)].map((item, index) => {
        return (item = index + 1)
      })
    }
  }
}
</script>

<style>
</style>
