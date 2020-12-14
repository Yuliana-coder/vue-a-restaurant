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
      axios
        .post("http://127.0.0.1:8000/auth/token/logout/", {
          headers: {
            Authorization: "Token 60577ba169f98a6b4073077957d7b1aac98747d7",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
