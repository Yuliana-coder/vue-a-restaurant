import axios from "axios";

export default {
  name: "Description",
  data() {
    return {
      information: null,
      vacancies: [],
      application: {
        name: "",
        surname: "",
        patronymic: "",
        email: "",
        phonenumber: "",
        vacancy: null,
      },
      vacancyError: false,
    };
  },
  beforeMount() {
    this.init();
  },
  methods: {
    init() {
      this.application = {
        name: "",
        surname: "",
        patronymic: "",
        email: "",
        phonenumber: "",
        vacancy: null,
      };

      axios.get("http://127.0.0.1:8000/api/restaurant/").then((response) => {
        this.information = response.data[0];
      });

      axios.get("http://127.0.0.1:8000/api/jobvacancy/").then((response) => {
        this.vacancies = response.data.map((item) => {
          return {
            id: item.id,
            name: item.name,
          };
        });
        console.log(this.vacancies);
      });
    },
    sendVacanacy() {
      if (
        this.application.name &&
        this.application.surname &&
        this.application.patronymic &&
        this.application.phonenumber &&
        this.application.vacancy
      ) {
        this.vacancyError = false;
        axios
          .post("http://127.0.0.1:8000/api/jobapplication/", this.application)
          .then((response) => {
            console.log(response);
            this.init();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.vacancyError = true;
      }
    },
  },
};
