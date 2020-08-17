<template>
  <div class="nav-link" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "navLink",
  props: ["to"],
  computed: {
    ...mapState(["panes"])
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setState"]),
    handleClick() {
      if (!this.panes.includes(this.to)) {
        this.panes.push(this.to);
        this.setState({ panes: this.panes });
      }
      this.$router.push({ name: this.to });
    }
  }
};
</script>
