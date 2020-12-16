// import axios from "axios";

export default {
  name: "Header",
  data() {
    return {
      username: null,
    };
  },
  computed: {
    isAuthorized: function() {
      return localStorage.getItem("token");
    },
  },
  beforeMount() {
    this.init();
  },
  methods: {
    logoutUser() {
      fetch("http://127.0.0.1:8000/auth/token/logout/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + localStorage.getItem("token"),
        },
      })
        .then(() => {
          localStorage.removeItem("token");
          location.reload();
        })
        .catch((error) => {
          console.log(error, "ERROR");
        });
    },
    init() {
      fetch("http://127.0.0.1:8000/auth/users/me", {
        method: "get",
        headers: {
          Authorization: "Token " + localStorage.getItem("token"),
        },
      }).then((response) => {
        response
          .json()
          .then((res) => {
            this.username = res.username;
          })
          .catch(() => {
            localStorage.removeItem("token");
          });
      });

      //   axios
      //     .get(
      //       "http://127.0.0.1:8000/auth/users/",
      //       {},
      //       {
      //         headers: {
      //           Authorization: "Token " + localStorage.getItem("token"),
      //         },
      //       }
      //     )
      //     .then((response) => {
      //       console.log(response);
      //     });
    },
  },
};
