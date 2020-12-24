import axios from "axios";

export default {
  name: "Book",
  data() {
    return {
      isContact: false,
      reasonsList: [],
      anotherReason: "",
      formData: {
        clientName: "",
        petitionReason: null,
        description: "",
        email: "",
        phonenumber: "",
      },
      isConfirm: false,
    };
  },
  beforeMount() {
    axios.get("http://127.0.0.1:8000/api/petitionreason/").then((response) => {
      this.reasonsList = response.data;
      console.log(this.reasonsList);
    });
  },
  computed: {
    isValidFields: function() {
      let res = false;
      res =
        this.formData.clientName &&
        this.formData.petitionReason &&
        this.formData.description;
      if (this.isContact) {
        res = res && (this.formData.email || this.formData.phonenumber);
      }
      if (this.formData.petitionReason === 6) {
        res = res && this.anotherReason;
      }

      return res;
    },
  },
  methods: {
    confirmPetition() {
      axios
        .post("http://127.0.0.1:8000/api/appeal/", this.formData)
        .then(() => {
          this.isConfirm = true;
        })
        .catch((error) => {
          this.isConfirm = false;
          console.log(error);
        });
    },
    goToHomepage() {
      this.$router.push("/");
      this.isConfirm = false;
    },
  },
};
