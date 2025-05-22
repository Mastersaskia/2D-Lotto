const numberGrid = document.getElementById("numberGrid");
const pickedNumbers = document.getElementById("pickedNumbers");
const betAmountDisplay = document.getElementById("betAmount");
const betTypeDisplay = document.getElementById("betTypeDisplay");
const amountInput = document.getElementById("amountInput");
const timestamp = document.getElementById("timestamp");
const walletDisplay = document.getElementById("wallet");
const ticketList = document.getElementById("ticketList");

let selectedNumbers = [];
let betType = 'STRAIGHT';
let wallet = 8000;

for (let i = 1; i <= 40; i++) {
  const btn = document.createElement("button");
  btn.innerText = i;
  btn.addEventListener("click", () => selectNumber(btn, i));
  numberGrid.appendChild(btn);
}

function selectNumber(btn, num) {
  if (selectedNumbers.includes(num)) {
    selectedNumbers = selectedNumbers.filter(n => n !== num);
    btn.classList.remove("selected");
  } else if (selectedNumbers.length < 2) {
    selectedNumbers.push(num);
    btn.classList.add("selected");
  }
  updateTicket();
}

document.getElementById("straightBtn").addEventListener("click", () => {
  betType = 'STRAIGHT';
  setBetTypeActive("straightBtn");
});
document.getElementById("rambleBtn").addEventListener("click", () => {
  betType = 'RAMBLE';
  setBetTypeActive("rambleBtn");
});

function setBetTypeActive(id) {
  document.getElementById("straightBtn").classList.remove("active");
  document.getElementById("rambleBtn").classList.remove("active");
  document.getElementById(id).classList.add("active");
  updateTicket();
}

function updateTicket() {
  pickedNumbers.innerText = selectedNumbers.length === 2
    ? `${selectedNumbers[0]}-${selectedNumbers[1]}`
    : "-- --";
  betAmountDisplay.innerText = amountInput.value;
  betTypeDisplay.innerText = `${betType} - ₱${amountInput.value}`;
  timestamp.innerText = new Date().toLocaleString();
}

document.getElementById("placeBetBtn").addEventListener("click", () => {
  const amount = parseInt(amountInput.value);
  if (selectedNumbers.length !== 2) {
    alert("Please pick 2 combinations.");
    return;
  }
  if (isNaN(amount) || amount < 10 || amount > 20000) {
    alert("Bet amount must be between ₱10 and ₱20,000.");
    return;
  }
  if (amount > wallet) {
    alert("Insufficient balance.");
    return;
  }

  wallet -= amount;
  walletDisplay.innerText = wallet;

  const li = document.createElement("li");
  li.textContent = `${selectedNumbers[0]}-${selectedNumbers[1]} | ${betType} | ₱${amount} | ${timestamp.innerText}`;
  ticketList.appendChild(li);

  selectedNumbers = [];
  document.querySelectorAll(".number-grid button").forEach(btn => btn.classList.remove("selected"));
  amountInput.value = 10;
  updateTicket();
});
