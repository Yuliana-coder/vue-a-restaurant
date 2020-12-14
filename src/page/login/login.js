import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      isLogin: true,
      isRegistration: false,
      loginFormData: {
        username: "",
        password: "",
      },
      isErrorLogin: false,
    };
  },
  methods: {
    toggleLogin() {
      this.isLogin = false;
      this.isRegistration = true;
    },
    goToLogin() {
      console.log(this.loginFormData);
      axios
        .post("http://127.0.0.1:8000/auth/token/login/", this.loginFormData)
        .then((response) => {
          this.$router.push("/");
          localStorage.setItem("token", response.data.auth_token);
        })
        .catch(() => {
          this.isErrorLogin = true;
        });
    },
  },
};
