<template>
  <nav class="navbar navbar-expand-md custom-nav">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">{{
        brandName
      }}</router-link>

      <ul class="navbar-nav ms-auto d-flex flex-row gap-3">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Home' }"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Books' }"
            >Books</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Contact' }"
            >Contact Us</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Login' }"
            >Login</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Register' }"
            >Register</router-link
          >
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
  background-color: var(--primary-color);
  padding: 15px 0;
}

.navbar-brand {
  color: #fff;
  font-weight: 700;
  text-decoration: none;
}

.nav-link {
  padding: 10px 15px;
  color: white;
  text-decoration: none;
}

.nav-link:hover {
  color:var(--secondary-color);
}
.navbar .nav-link.active-link {
  color: #44b89d;
}
</style>
