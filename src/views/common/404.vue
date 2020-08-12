<template>
  <div>
    <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
      <template v-slot:extra>
        <a-button type="primary" @click="$router.push('/')">Back Home</a-button>
      </template>
    </a-result>
  </div>
</template>

<script>
import { Result } from "ant-design-vue";

export default {
  components: {
    "a-result": Result
  }
};
</script>
