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

      console.log("Token " + localStorage.getItem("token"));
      fetch("http://127.0.0.1:8000/auth/token/logout/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + localStorage.getItem("token"),
        },
      })
        .then(() => {
          localStorage.removeItem("token");
        })
        .catch((error) => {
          console.log(error, "ERROR");
        });
    },
  },
};
