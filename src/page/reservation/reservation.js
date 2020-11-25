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
      },
    };
  },
  methods: {
    confirmReservation() {
      console.log("click");
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
  },
};
