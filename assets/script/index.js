// VARIABLE NAMES

const dessertItems = document.querySelector(".dessertItems");
const cartBtns = document.querySelectorAll(".cart");
const cartNums = document.querySelectorAll(".cartNum");
const images = document.querySelectorAll(".image");
const decrease = document.querySelectorAll(".decreament");
const increase = document.querySelectorAll(".increament");
const cartQuantity = document.querySelectorAll(".cartQuantity");
const orderedCart = document.querySelectorAll(".orderedCart");
const orderTotal = document.querySelector(".orderTotal");
const carbonNeutral = document.querySelector(".carbonNeutral");
const confirmOrder = document.querySelector(".confirmOrder");
const quti = document.querySelectorAll(".Quti");
const itemUnitPrice = document.querySelectorAll(".itemUnitPrice");
const itemTotalPrice = document.querySelectorAll(".itemTotalPrice");
const removeIcon = document.querySelectorAll(".removeIcon");
const emptyOrder = document.querySelector(".emptyOrder");
const modal = document.querySelector(".modal");
const yourOrders = document.querySelectorAll(".yourOrders");
const qtyConfirmed = document.querySelectorAll(".qtyConfirmed");
const sum = document.querySelectorAll(".sum");
const newOrder = document.querySelector(".newOrder");
let quantity = document.querySelector(".quantity");
let orderTotalAmount = document.querySelector(".orderTotalAmount");
let confirmedTotal = document.querySelector(".confirmedTotal");
let counter = [];
let tempTotal = [];
let totalQuti = [];

cartBtns.forEach((cartBtn, index) => {
  tempTotal[index] = 0;
  cartBtn.addEventListener("click", () => {
    cartBtn && images[index].classList.add("border");
    cartBtn.classList.add("hidden");
    cartNums[index].classList.remove("hidden");
    emptyOrder.classList.add("hidden");
    cartBtn && orderedCart[index].classList.remove("hidden");
    orderTotal.classList.remove("hidden");
    carbonNeutral.classList.remove("hidden");
    tempTotal[index] += Number(itemTotalPrice[index].innerText);
    orderTotalAmount.innerText =
      Number(orderTotalAmount.innerText) + Number(tempTotal[index]);

    totalQuti[index] = counter[index];
    quantity.innerText = Number(quantity.innerText) + Number(totalQuti[index]);

    confirmOrder.classList.remove("hidden");
    confirmOrder.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modal.showModal();
      yourOrders.forEach((yourOrder) => {
        if (orderedCart[index].classList.contains("hidden")) {
          yourOrders[index].classList.add("hidden");
        } else {
          orderedCart[index] && yourOrders[index].classList.remove("hidden");
        }

        qtyConfirmed[index].innerText = quti[index].innerText;
        sum[index].innerText = itemTotalPrice[index].innerText;
      });
      confirmedTotal.innerText = orderTotalAmount.innerText;
    });
  });
});

increase.forEach((inc, index) => {
  counter[index] = 1;
  inc.addEventListener("click", () => {
    counter[index]++;
    cartQuantity[index].innerText = counter[index];
    quti[index].innerText = cartQuantity[index].innerText;
    itemTotalPrice[index].innerText =
      quti[index].innerText * itemUnitPrice[index].innerText;
    orderTotalAmount.innerText =
      Number(orderTotalAmount.innerText) + Number(tempTotal[index]);

    quantity.innerText = Number(quantity.innerText) + Number(totalQuti[index]);
  });
});

decrease.forEach((dec, index) => {
  dec.addEventListener("click", () => {
    if (counter[index] > 1) {
      counter[index]--;
      cartQuantity[index].innerText = counter[index];
      quti[index].innerText = cartQuantity[index].innerText;
      itemTotalPrice[index].innerText =
        quti[index].innerText * itemUnitPrice[index].innerText;
      orderTotalAmount.innerText =
        Number(orderTotalAmount.innerText) - Number(tempTotal[index]);

      quantity.innerText =
        Number(quantity.innerText) - Number(totalQuti[index]);
    }
  });
});

removeIcon.forEach((remove, index) => {
  remove.addEventListener("click", () => {
    cartBtns[index].classList.remove("hidden");
    images[index].classList.remove("border");
    cartNums[index].classList.add("hidden");
    orderedCart[index].classList.add("hidden");
    orderTotalAmount.innerText =
      Number(orderTotalAmount.innerText) -
      quti[index].innerText * itemUnitPrice[index].innerText;
    tempTotal[index] = 0;
    counter[index] = 1;
    cartQuantity[index].innerText = 1;
    quti[index].innerText = cartQuantity[index].innerText;
    itemTotalPrice[index].innerText =
      quti[index].innerText * itemUnitPrice[index].innerText;
    if (orderTotalAmount.innerText === "0") {
      orderTotal.classList.add("hidden");
      carbonNeutral.classList.add("hidden");
      confirmOrder.classList.add("hidden");
      emptyOrder.classList.remove("hidden");
    }
  });
});

newOrder.addEventListener("click", () => {
  cartBtns.forEach((cartBtn, index) => {
    cartBtn.classList.remove("hidden");
    images[index].classList.remove("border");
    cartNums[index].classList.add("hidden");
    orderedCart[index].classList.add("hidden");
    yourOrders[index].classList.add("hidden");
    orderTotalAmount.innerText = 0;
    tempTotal[index] = 0;
    counter[index] = 1;
    cartQuantity[index].innerText = 1;
    quti[index].innerText = cartQuantity[index].innerText;
    itemTotalPrice[index].innerText =
      quti[index].innerText * itemUnitPrice[index].innerText;
    orderTotal.classList.add("hidden");
    carbonNeutral.classList.add("hidden");
    confirmOrder.classList.add("hidden");
    emptyOrder.classList.remove("hidden");
  });
  modal.close();
  modal.classList.add("hidden");
});

modal.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
    modal.close();
    cartBtns.forEach((cartBtn, index) => {
      cartBtn.classList.remove("hidden");
      images[index].classList.remove("border");
      cartNums[index].classList.add("hidden");
      orderedCart[index].classList.add("hidden");
      yourOrders[index].classList.add("hidden");
      orderTotalAmount.innerText = 0;
      tempTotal[index] = 0;
      counter[index] = 1;
      cartQuantity[index].innerText = 1;
      quti[index].innerText = cartQuantity[index].innerText;
      itemTotalPrice[index].innerText =
        quti[index].innerText * itemUnitPrice[index].innerText;
      if (orderTotalAmount.innerText === "0") {
        orderTotal.classList.add("hidden");
        carbonNeutral.classList.add("hidden");
        confirmOrder.classList.add("hidden");
        emptyOrder.classList.remove("hidden");
      }
    });
  }
});
