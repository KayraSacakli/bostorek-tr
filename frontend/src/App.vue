<template>
    <NavBar />
    <RouterView />
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
  background-color: #f4f4f4;
  
}
nav {
  margin-bottom: 20px; /* NavBar ile içerik arasına boşluk */
}

a {
   text-decoration: none !important;
}
</style>
