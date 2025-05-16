<template>
  <div class="text-center my-5">
    <h1 class="display-4 font-weight-bolder">{{ title }}</h1>
    <p class="lead">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
  /*  props:['title','text']*/
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false, // veya true, kullanıma göre
    },
  },
};
</script>

<style lang="scss" scoped></style>
