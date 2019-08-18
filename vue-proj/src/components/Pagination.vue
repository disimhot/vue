<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item"
      :class="{'disabled' : currentPage === 1}"
      @click="setPreviousPage">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        :class="{'active': page_item === currentPage}"
        v-for="page_item in pages"
        :key="page_item"
        @click="currentPage = page_item"
      >
        <a class="page-link" href="#">{{ page_item }}</a>
      </li>
      <li
        class="page-item"
        :class="{'disabled' : currentPage === pages_quantity}"
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
    currentPage: ''
  }),
  watch: {
    pages_quantity() {
      this.setPages()
    },
    currentPage() {
      this.$emit('input', this.currentPage)
    },
    page() {
      this.currentPage = this.page
    }
  },
  mounted() {
    this.currentPage = this.page
    this.setPages()
  },
  methods: {
    setPages() {
      this.pages = [...Array(this.pages_quantity)].map((item, index) => {
        return (item = index + 1)
      })
    },
    setPreviousPage() {
       if (this.currentPage !== 1) {
          this.currentPage -= 1;
       }
    },
    setNextPage () {
       if (this.currentPage !== this.pages_quantity) {
          this.currentPage += 1;
       }
    }
  }
}
</script>

<style>
</style>
