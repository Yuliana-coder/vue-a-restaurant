import axios from "axios";

export default {
  name: "News",
  data() {
    return {
      newsList: [],
    };
  },
  beforeMount() {
    this.init();
  },
  methods: {
    init() {
      axios.get("http://127.0.0.1:8000/api/new/").then((response) => {
        if (response && response.data && response.data.length) {
          this.newsList = response.data;
          console.log(this.newsList);
        }
      });
    },
  },
};
