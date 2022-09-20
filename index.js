const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const cash = document.querySelector(".cashAll");

const next = document.querySelector("#next-button");
const checkAmount = document.querySelector("#check-button");

const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

cash.style.display = "none";
next.addEventListener("click", function showBox() {
  hideMessage();
  if (billAmount.value) {
    cash.style.display = "flex";
    next.style.display = "none";
  }
});

checkAmount.addEventListener("click", function validateBillCash() {
  hideMessage();

  let billAmt = Number(billAmount.value);
  let cashGvn = Number(cashGiven.value);

  if (billAmt > 0) {
    if (cashGvn >= billAmt) {
      const amountToBeReturned = cashGvn - billAmt;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Do you wanna pay or wash plates? 🍽️");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  noOfNotes.forEach((ele) => (ele.innerText = ""));
  message.innerText = "";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
