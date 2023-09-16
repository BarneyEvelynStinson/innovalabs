<template>
  <div class="about">
    <h1>Task 2 - List of users</h1>
    <input type="text" placeholder="Search..." v-model="searchTerm" />
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>User name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Company Name</th>
      </tr>
      <tr v-for="user in getFilteredUsers" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
        <td>
          {{ user.address.street }}, {{ user.address.suite }},
          {{ user.address.city }}, {{ user.address.zipcode }}
        </td>
        <td>{{ user.phone }}</td>
        <td>{{ user.website }}</td>
        <td>{{ user.company.name }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      users: [],
      searchTerm: "",
    };
  },
  created() {
    this.$store.dispatch("callUsersApi");
  },
  computed: {
    ...mapGetters(["getUsers"]),
    getFilteredUsers() {
      return this.getUsers.filter((user) => {
        const values = Object.values(user);
        const nestedValues = values.flatMap((val) =>
          val.city || val.street || val.suite || val.zipcode || val.name
            ? Object.values(val)
            : val
        );
        return nestedValues.some((val) =>
          val.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      });
    },
  },
};
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
}
th,
td {
  padding: 15px;
}
</style>
