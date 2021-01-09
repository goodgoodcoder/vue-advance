<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import listItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";

export default {
  components: {
    listItem,
  },
  mounted () {
    bus.$emit("end:spinner");
  }
};
</script>

<style>
</style>