<template>
  <div class="content oms-orders">
    <navBar />
  </div>
</template>

<script>
import navBar from "@components/navBar";
export default {
  name: "omsOrders",
  components: {
    navBar
  },
  data() {
    return {
      a: 1
    };
  },
  mounted() {
    console.log("oms mounted");
  },
  methods: {}
};
</script>
