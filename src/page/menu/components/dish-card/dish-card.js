import { getCurrentQauntaty, setCurrentQauntaty } from "@/common/common.js";

export default {
  data() {
    return {
      getCurrentQauntaty: getCurrentQauntaty,
      setCurrentQauntaty: setCurrentQauntaty,
    };
  },
  name: "DishCard",
  props: ["dish"],
  computed: {
    currentQuantity() {
      let result = this.getCurrentQauntaty(0);
      console.log(this.getCurrentQauntaty(0));
      return result;
    },
  },
  methods: {
    setCurrentQuantaty(quantaty) {
      this.setCurrentQauntaty(quantaty);
    },
  },
};
