<template>
  <div class="login-container">
    <div class="login-form-container">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
              'email',
              {
                rules: [{ required: true, message: 'Please input your email!' }]
              }
            ]"
            placeholder="email"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' }
                ]
              }
            ]"
            type="password"
            placeholder="Password"
          >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
              'remember',
              { valuePropName: 'checked', initialValue: true }
            ]"
          >
            <span>Remember me</span>
          </a-checkbox>
          <a class="login-form-forgot" href>Forgot password</a>
          <a-button
            type="primary"
            :loading="loading"
            class="login-form-button"
            html-type="submit"
          >Login</a-button>
          <a href>register now!</a>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { Checkbox } from "ant-design-vue";
export default {
  components: {
    "a-checkbox": Checkbox
  },
  data() {
    return {
      loading: false,
      form: this.$form.createForm(this, { name: "login" })
    };
  },
  mounted() {},
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        console.log(values);
        if (!err) {
          this.$message.success("登陆成功");
          this.$router.push("/index/home");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$color: red;

.login-container {
  width: 100%;
  min-height: 100%;
  min-width: 1200px;
  // background-image: url('/banner2.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  align-items: center;

  .login-form-container {
    max-width: 300px;
    margin: 0 auto;
    box-shadow: 2px 2px 20px #eeeeee;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-60%) translateY(-50%);
  }
  .login-form {
    // background: rgba(0, 0, 0, 0.1);
    padding: 40px 30px 5px 30px;
    border-radius: 4px;
  }
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }
}
</style>
