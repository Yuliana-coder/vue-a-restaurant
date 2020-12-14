export default {
  name: "Homepage",
  computed: {
    userIsAuth: function() {
      let res = false;
      if (localStorage.getItem("token")) {
        console.log(localStorage.getItem("token"));
        res = true;
      }

      return res;
    },
  },
};
