<template>
  <div class="home">
    <navBar />
    <img alt="Vue logo" src="../assets/image/logo.png" />
    Dashboard
  </div>
</template>

<script>
import navBar from "@components/navBar";
export default {
  name: "Home",
  components: {
    navBar
  }
};
</script>
