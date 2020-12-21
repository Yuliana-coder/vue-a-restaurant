import axios from "axios";
import { getCurrentQauntaty, setCurrentQauntaty } from "@/common/common.js";

export default {
  name: "Dish",
  data() {
    return {
      dish: null,
      id: null,
      comments: [],
      currentComment: {
        clientName: "",
        content: "",
        dish: null,
      },
      isCommentError: false,
      getCurrentQauntaty: getCurrentQauntaty,
      setCurrentQauntaty: setCurrentQauntaty,
      currentQuantity: 0,
    };
  },
  beforeMount() {
    this.init();
    this.currentQuantity = this.getCurrentQauntaty(this.id);
  },

  methods: {
    init() {
      this.id = this.$route.params.id;
      this.currentComment.clientName = "";
      this.currentComment.content = "";
      this.currentComment.dish = Number(this.id);
      console.log(this.$route.params.id);
      axios
        .get(`http://127.0.0.1:8000/api/dish/${this.id}`)
        .then((response) => {
          if (response && response.data) {
            this.dish = response.data;
          }
        });

      axios.get("http://127.0.0.1:8000/api/comment/").then((response) => {
        if (response && response.data && response.data.length) {
          let comments = [...response.data];
          this.comments = comments.filter((item) => {
            return item.dish === Number(this.id);
          });
          this.comments = this.comments.reverse();
        }
      });
    },
    sendComment() {
      if (this.currentComment.clientName && this.currentComment.content) {
        this.isCommentError = false;
        axios
          .post("http://127.0.0.1:8000/api/comment/", this.currentComment)
          .then((response) => {
            console.log(response);
            this.init();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.isCommentError = true;
      }
    },
    setCurrentQuantaty(quantaty) {
      if (quantaty >= 0) {
        this.setCurrentQauntaty(this.id, quantaty);
        this.currentQuantity = this.getCurrentQauntaty(this.id);
      }
    },
  },
};
