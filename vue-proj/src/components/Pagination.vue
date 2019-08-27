<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item"
      :class="{disabled : page === 1}"
      @click="setPreviousPage">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        :class="{active : page_item === page}"
        v-for="page_item in pages_quantity"
        :key="page_item"
        @click="setAnyPage(page_item)"
      >
        <a class="page-link" href="#">{{ page_item }}</a>
      </li>
      <li
        class="page-item"
        :class="{disabled : page === pages_quantity}"
        @click="setNextPage"
      >
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
    pages: [],
  }),
  methods: {
    setPreviousPage() {
       if (this.page !== 1) {
          this.$emit('input', (this.page - 1))
       }
    },
    setNextPage () {
       if (this.page !== this.pages_quantity) {
          this.$emit('input', (this.page + 1))
       }
    },
    setAnyPage(page) {
      this.$emit('input', page)
    }
  }
}
</script>