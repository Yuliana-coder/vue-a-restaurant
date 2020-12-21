import { getCurrentQauntaty, setCurrentQauntaty } from "@/common/common.js";

export default {
  data() {
    return {
      getCurrentQauntaty: getCurrentQauntaty,
      setCurrentQauntaty: setCurrentQauntaty,
      currentQuantity: 0,
    };
  },
  name: "DishCard",
  props: ["dish"],
  beforeMount() {
    this.currentQuantity = this.getCurrentQauntaty(this.dish.id);
  },
  methods: {
    setCurrentQuantaty(quantaty) {
      if (quantaty >= 0) {
        this.setCurrentQauntaty(this.dish.id, quantaty);
        this.currentQuantity = this.getCurrentQauntaty(this.dish.id);
      }
    },
  },
};
