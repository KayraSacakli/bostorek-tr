<template>
  <nav class="navbar navbar-expand-md custom-nav">
    <div class="container">
      <router-link class="navbar-brand" to="/home">{{ brandName }}</router-link>

      <ul class="navbar-nav ms-auto d-flex flex-row gap-3">
        <li class="nav-item">
          <router-link class="nav-link" to="/home">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/books">Books</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact Us</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      brandName: "Bostorek",
    };
  },
};
</script>

<style scoped>
.custom-nav {
  background-color: #063547;
  padding: 15px 0;
}

.navbar-brand {
  color: #fff;
  font-weight: 700;
  text-decoration: none;
}

.nav-link {
  color: white;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
