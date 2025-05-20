<template>
  <section class="full-section-height">
    <div class="container">
      <form class="mt-5" @submit.prevent="submitForm">
        <div class="row justify-content-center"></div>


        <div class="row justify-content-center">
          <div class="col-md-6 col-8 mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" v-model="formData.email" required>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-md-6 col-8 mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password" v-model="formData.password" required>
          </div>
        </div>


        <div class="row justify-content-center">
          <div class="col-md-6 col-8 mb-3">
            <button type="submit" class="btn btn-primary w-100">Login</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginView",
    data() {
    return {
      formData: {
        email: '',
        password: '',
      }
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.formData);
    }
  }
};
</script>

<style lang="scss" scoped>
.full-section-height{
  min-height: calc(100vh - 130px); /* Düzeltilmiş hesaplama */
  display: flex;
  align-items: center;
  padding: 20px 0;
}
</style>
