<template>
  <section>
    <div class="container">
      <SectionHeader
        :title="book.name"
        :text="book.author"
      />
      <font-awesome-icon 
        :icon="['fas', 'arrow-left']" 
        style="font-size: 32px; color: var(--primary-color); margin-right: 10px; cursor: pointer" 
        @click="goToBackBooks"
        class="mb-2" 
      />



      <div class="row">
        <div class="col-lg-6">
          <img class="card-img-top" src="../../template/images/b_detail.jpg" />
        </div>

        <div class="col-lg-6">
          <div class="details-wrapper">
            <p class="lead description">
              {{ book.description }}
            </p>

            <div class="mb-4">
              <div class="row border-bottom pb-2">
                <div class="col-lg-6"><strong>Page</strong></div>
                <div class="col-lg-6">{{ book.page }}</div>
              </div>
              <div class="row border-bottom pb-2">
                <div class="col-lg-6"><strong>Category</strong></div>
                <div class="col-lg-6">{{ book.category }}</div> </div>
              <div class="row border-bottom pb-2">
                <div class="col-lg-6"><strong>Rating</strong></div>
                <div class="col-lg-6">{{ book.rating }}</div> </div>
              <div class="row border-bottom pb-2">
                <div class="col-lg-6"><strong>Upload Date</strong></div>
                <div class="col-lg-6">{{ book.uploadDate }}</div>
              </div>
            </div>

            <div class="comments-section">
              <h3 class="display-6 mb-2">Comments</h3>

              <div v-for="index in 4" :key="index" class="card mb-3">
                <div class="card-body">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae odit, labore non quisquam sit amet.
                  </p>
                  <div class="d-flex justify-content-between"></div>
                  <p class="fw-bold fst-italic">jhon doe</p>
                  <div class="d-flex justify-content-end aligin-items-center mb+2">
                    <font-awesome-icon icon="thumbs-up" />
                    <p class="ps-2 mb-0"><strong>8</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";
import books from "@/db.js";

export default {
  name: "BookDetailView",
  components: {
    SectionHeader,
  },
  data() {
    return {
      book: null,
    };
  },
  created() {
    const bookId = this.$route.params.id;
    this.book = books.find(book => book.id === parseInt(bookId));
  },
  methods:{
    goToBackBooks() {
      this.$router.push({name:"Books"})
    }
  }
};
</script>

<style scoped>
.details-wrapper {
  max-height: 740px;
  display: flex;
  flex-direction: column;
}

.comments-section {
  flex-grow: 1;
  overflow-y: auto;
}
.description {
  min-height: 150px;
  max-height: 250px;
  overflow-y: auto;
}
</style>
