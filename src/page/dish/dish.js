import axios from "axios";

export default {
  name: "Dish",
  data() {
    return {
      dish: null,
      id: null,
    };
  },
  beforeMount() {
    this.id = this.$route.params.id;
    console.log(this.$route.params.id);
    axios.get(`http://127.0.0.1:8000/api/dish/${this.id}`).then((response) => {
      if (response && response.data) {
        this.dish = response.data;
      }
    });
  },
};
