import axios from "axios";

export default {
  name: "Description",
  data() {
    return {
      information: null,
    };
  },
  beforeMount() {
    axios.get("http://127.0.0.1:8000/api/restaurant/").then((response) => {
      console.log(response.data[0]);
      this.information = response.data[0];
    });
  },
};
