import axios from "axios";

export default {
  name: "Vacancies",
  data() {
    return {
      vacancies: [],
    };
  },
  beforeMount() {
    this.init();
  },
  methods: {
    init() {
      axios.get("http://127.0.0.1:8000/api/jobvacancy/").then((response) => {
        if (response && response.data && response.data.length) {
          this.vacancies = response.data;
        }
      });
    },
  },
};
