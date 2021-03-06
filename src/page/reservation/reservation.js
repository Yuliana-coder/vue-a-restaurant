import axios from "axios";

export default {
  name: "Reservation",
  data() {
    return {
      tables: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
      ],
      formData: {
        name: "",
        reservationTime: null,
        tableNum: 1, // первый из списка доступных к бронированию
        isShowЫuccessPopup: false,
      },
      allTables: null,
      freeTables: null,
      orders: null,
      quantatyPlaces: 0,
      isShowPopup: false,
    };
  },
  beforeMount() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/login");
    } else {
      this.init();
      console.log(
        Object.keys(JSON.parse(localStorage.getItem("currentOrder"))).map(
          (item) => {
            return Number(item);
          }
        )
      );
    }
  },
  methods: {
    init() {
      axios.get("http://127.0.0.1:8000/api/table/").then((response) => {
        if (response && response.data && response.data.length) {
          this.allTables = response.data;
        }
      });

      axios.get("http://127.0.0.1:8000/api/order/").then((response) => {
        if (response && response.data && response.data.length) {
          this.orders = response.data.map((item) => {
            return String(item.numberTable);
          });
          this.tables = this.tables.filter((x) => this.orders.indexOf(x) == -1);
          if (this.tables && this.tables.length) {
            this.tableNum = this.tables[0];
          }
        }
      });
    },
    confirmReservation() {
      this.isShowPopup = true;
      const formdata = {
        clientName: this.formData.name,
        orderTime: this.formData.reservationTime,
        numberTable: this.formData.tableNum,
      };

      if (localStorage.getItem("currentOrder")) {
        formdata.dishList = Object.keys(
          JSON.parse(localStorage.getItem("currentOrder"))
        ).map((item) => {
          return Number(item);
        });
        formdata.quantityArray = localStorage.getItem("currentOrder");
      }

      axios.post("http://127.0.0.1:8000/api/order/", formdata).then(() => {
        this.isShowЫuccessPopup = true;
      });
      console.log("click");
    },
    setQauntaty() {
      this.quantatyPlaces = this.allTables.find((item) => {
        return item.number === Number(this.formData.tableNum);
      }).quantityPlaces;
    },
    exitPopup() {
      this.$router.push("/");
      this.isShowPopup = false;
    },
  },
  computed: {
    isNotAllData: function() {
      let res = true;
      if (
        this.formData.name &&
        this.formData.reservationTime &&
        this.formData.tableNum
      ) {
        res = false;
      }
      return res;
    },
    // qauntatyPlaces: function() {
    //   return this.allTables.find((item) => {
    //     return item.number === Number(this.formData.numberTable);
    //   }).qauntatyPlaces;
    // },
  },
};
