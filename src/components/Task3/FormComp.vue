<template>
  <div>
    <form class="center" @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="exampleFirstName" class="form-label">First Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleFirstName"
          v-model="userData.firstName"
        />
      </div>
      <div class="mb-3">
        <label for="exampleLastName" class="form-label">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleLastName"
          v-model="userData.lastName"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        firstName: "",
        lastName: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (this.userData.firstName.length < 3) {
        alert("Minimum 3 characters required in firstname");
      } else if (this.userData.lastName.length < 3) {
        alert("Minimum 3 characters required in lastname");
      } else {
        alert("Form submitted successfully");
      }
    },
  },
};
</script>

<style scoped>
.center {
  max-width: 500px;
  margin: 0 auto;
}
</style>
