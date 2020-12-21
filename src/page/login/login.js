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
      registrationFormData: {
        email: "",
        username: "",
        password: "",
      },
      isErrorLogin: false,
      isErrorRegistration: false,
    };
  },
  methods: {
    toggleLogin() {
      this.isLogin = !this.isLogin;
      this.isRegistration = !this.isRegistration;
    },
    goToLogin() {
      console.log(this.loginFormData);
      axios
        .post("http://127.0.0.1:8000/auth/token/login/", this.loginFormData)
        .then((response) => {
          this.isErrorLogin = false;
          localStorage.setItem("token", response.data.auth_token);
          this.$router.push("/");
          location.reload();
        })
        .catch(() => {
          this.isErrorLogin = true;
        });
    },
    goToRegistration() {
      axios
        .post("http://127.0.0.1:8000/auth/users/", this.registrationFormData)
        .then(() => {
          this.isErrorRegistration = false;

          alert(
            this.registrationFormData.username +
              "Вы были успешно зарегестрированы!"
          );

          axios
            .post("http://127.0.0.1:8000/auth/token/login/", {
              username: this.registrationFormData.username,
              password: this.registrationFormData.password,
            })
            .then((response) => {
              this.isErrorLogin = false;
              localStorage.setItem("token", response.data.auth_token);
              localStorage.setIten("currentOrder", "{}");
              this.$router.push("/");
              location.reload();
            });
        })
        .catch(() => {
          this.isErrorRegistration = true;
        });
    },
  },
};
