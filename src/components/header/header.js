import axios from "axios";

export default {
  name: "Header",
  computed: {
    isAuthorized: function() {
      return localStorage.getItem("token");
    },
  },
  methods: {
    logoutUser() {
      console.log(localStorage.getItem("token"));
      console.log("Token " + localStorage.getItem("token"));
      let instance = axios.create();
      instance.defaults.headers.common["Token "] = localStorage.getItem(
        "token"
      );
      instance
        .post("http://127.0.0.1:8000/auth/token/logout/")
        .then((response) => {
          console.log("Response of logout", response);
        })
        .catch((error) => {
          console.log(error);
        });

      // axios
      //   .post("http://127.0.0.1:8000/auth/token/logout/", {
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Authorization': "Token " + localStorage.getItem("token"),
      //     },
      //   })
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
  },
};
