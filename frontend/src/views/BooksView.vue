<template>
  <section>
    <div class="container">
      <SectionHeader
        title="Books"
        text="Herhangi bir navigasyonu durdurun ve sonucunu kesin olarak kontrol edin."
      />

      <BookList :books="PaginationBooks" 
      />

      <Pagination
        :currentPage="currentPage"
        :totalPage="totalPage"
        @page-changed="updatePage"
      />
    </div>
  </section>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";
import BookList from "@/components/BookList.vue";
import books from "@/db.js";
import Pagination from "@/components/pagination.vue";

export default {
  name: "BooksView",
  components: {
    SectionHeader,
    BookList,
    Pagination,
  },
  data() {
    return {
      books: books,
      currentPage: 1,
      itemsPerPage: 8,
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.books.length / this.itemsPerPage);
    },
    PaginationBooks() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.books.slice(startIndex, endIndex);
    },
  },
  methods: {
    updatePage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped>
.auth-box {
  margin-top: -30px;
}
</style>
