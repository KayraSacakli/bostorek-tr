<template>
  <div class="card border-0 shadow position-relative">
    <img src="../../template/images/b1.jpg" class="card-img-top" >
    <div class="card-body">
      <div class="auth-box">
        <span class="py-1 px-3 text-white rounded-pill" style="background-color: #063547">
          {{ book.author }}
        </span>
      </div>
      <h5 class="card-title mt-3 fw-semibold">{{ book.name }}</h5>
      <p class="card-text">{{ truncatedText }}</p>
      <div class="d-flex justify-content-between align-items-center">
        <a href="#" class="card-link a">Read More</a>
        <p class="py-1 px-2 text-white badge md-0 a" style="background-color: #063547;">
          {{ book.uploadDate }}
        </p>
      </div>
    </div>
    <span
    :class="ratingBageClass" 
    class="position-absolute top-0 start-100 translate-middle p-2 text-light rounded-circle border border-2 border-light">
      {{ book.rating }}
    </span>
  </div>
</template>

<script>
export default {
  name: "BookItem",
  props: {
    book: {
      type: Object,
      default: () => ({})
    }
  },
  computed:{
    ratingBageClass(){
      if(this.book.rating > 7) {
        return 'bg-success'
      }
      else if(this.book.rating > 4) {
        return 'bg-warning'
      }
      else {
        return 'bg-danger'
      }
    },
    truncatedText(){
      if (this.book.description.length > 90) {
  const truncated = this.book.description.slice(0, 90);
  const lastSpaceIndex = truncated.lastIndexOf(' '); // Son boşluğun indeksini bul
  if (lastSpaceIndex > 0) {
    return truncated.slice(0, lastSpaceIndex) + '...'; // Son kelimeyi atlayıp "..." ekle
  } else {
    return truncated + '...'; // Boşluk yoksa direkt kesip "..." ekle
  }
} else {
  return this.book.description; // 80 karakterden kısaysa olduğu gibi döndür
}
    }
  }
};
</script>

<style scoped>
.card-text{
  min-height: 70px;
  
}
</style>
