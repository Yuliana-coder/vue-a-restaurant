import axios from "axios";

export default {
  name: "Menu",
  data() {
    return {
      dishes: [],
      comments: [],
    };
  },
  beforeMount() {
    axios.get("http://127.0.0.1:8000/api/dish/").then((response) => {
      if (response && response.data && response.data.length) {
        console.log(response.data);
        this.dishes = response.data;
      }
    });

    axios.get("http://127.0.0.1:8000/api/comment/").then((response) => {
      if (response && response.data && response.data.length) {
        this.comments = response.data;
        console.log(this.getComments(1));
      }
    });
  },
  methods: {
    getComments(id) {
      let comments = [...this.comments];
      return comments.filter((item) => {
        return item.dish === id;
      });
    },
  },
};
