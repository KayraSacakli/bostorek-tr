<template>
  <div class="row">
    <div
      v-for="book in books"
      :key="book.id"
      class="col-sm-6 col-md-4 col-xl-3 mb-5"
    >
    <RouterLink :to="'/books/' + book.id">
       <BookItem :book="book" />
    </RouterLink>
     
    </div>
  </div>
</template>

<script>
import BookItem from "@/components/BookItem.vue";
export default {
  name: "BookList",
  components: {
    BookItem,
  },
  props: {
    books: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped></style>
