export function setCurrentQauntaty(id, quantaty) {
  let currentOrder = {};
  if (localStorage.getItem("currentOrder")) {
    currentOrder = JSON.parse(localStorage.getItem("currentOrder"));
  }
  if (currentOrder) {
    if (
      Object.keys(currentOrder).find((item) => {
        return item === id;
      })
    ) {
      Object.keys(currentOrder).forEach((item) => {
        if (item === id) {
          currentOrder[item] = quantaty;
        }
      });
    } else {
      currentOrder[id] = quantaty;
    }

    localStorage.setItem("currentOrder", JSON.stringify(currentOrder));
  }
}

export function getCurrentQauntaty(id) {
  let currentOrder = {};
  let res = 0;
  if (localStorage.getItem("currentOrder")) {
    currentOrder = JSON.parse(localStorage.getItem("currentOrder"));
  }
  let position = Object.keys(currentOrder).find((item) => {
    return item === String(id);
  });

  if (position) {
    res = currentOrder[position];
  }
  return res;
}
