<template>
  <div>
    <a-result
      status="403"
      title="403"
      sub-title="Sorry, you are not authorized to access this page."
    >
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
