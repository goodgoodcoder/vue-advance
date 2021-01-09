<template>
  <div class="header">
    <router-link to="/news">News</router-link>
    <router-link to="/ask">Ask</router-link>
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 100%;
  color: white;
  background-color: #42b883;
  display: flex;
  font-size: 1rem;
  padding: 8px;
}

.header .router-link-exact-active {
  color: #35495e;
  font-weight: bold;
}

.header a {
  all: unset;
  color: white;
  padding: 5px;
}

.header a:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>