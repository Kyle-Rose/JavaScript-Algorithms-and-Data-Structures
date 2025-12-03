let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const total = document.getElementById('total');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const cashInDrawer = document.getElementById('cash-in-drawer');
const change = document.getElementById('change-due');

total.innerText = `Total: $${price.toFixed(2)}`;
drawerTotal(); 

purchaseBtn.addEventListener('click', () => {
  const cashPaid = parseFloat(cash.value);
  if (isNaN(cashPaid)) return alert("Please enter a valid number for cash.");
  calculateChange(price, cashPaid);
});

function drawerTotal() {
  cashInDrawer.innerHTML = "<h2>Change in drawer:</h2>";
  cid.forEach(([name, amount]) => {
    cashInDrawer.innerHTML += `<p>${name}: $${amount.toFixed(2)}</p>`;
  });
}

function calculateChange(price, cashPaid) {
  let changeDue = Math.round((cashPaid - price) * 100);

  if (changeDue < 0) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (Math.abs(changeDue) < 0.001) {
    change.innerText = "No change due - customer paid with exact cash";
    return;
  }

  const DENOMINATIONS = [
    ['ONE HUNDRED', 10000],
    ['TWENTY', 2000],
    ['TEN', 1000],
    ['FIVE', 500],
    ['ONE', 100],
    ['QUARTER', 25],
    ['DIME', 10],
    ['NICKEL', 5],
    ['PENNY', 1]
  ];

  let drawer = {};
  cid.forEach(([name, amount]) => drawer[name] = Math.round(amount * 100));

  let changeArray = [];

  for (let [name, value] of DENOMINATIONS) {
    if (changeDue >= value && drawer[name] > 0) {
      let amountFromDrawer = Math.min(Math.floor(changeDue / value) * value, drawer[name]);
      if (amountFromDrawer > 0) {
        changeArray.push([name, (amountFromDrawer / 100).toFixed(2)]);
        changeDue -= amountFromDrawer;
        drawer[name] -= amountFromDrawer;
      }
    }
  }

  const totalInDrawer = Object.values(drawer).reduce((sum, amt) => sum + amt, 0);
  let status = '';
  if (changeDue > 0) {
    status = "INSUFFICIENT_FUNDS";
    change.innerText = `Status: ${status}`;
    return;
  } else if (totalInDrawer === 0) {
    status = "CLOSED";
  } else {
    status = "OPEN";
  }

  let displayText = `Status: ${status}`;
  if (status === "OPEN" || status === "CLOSED") {
    changeArray.forEach(([name, amount]) => {
      displayText += ` ${name}: $${amount}`;
    });
  }
  change.innerText = displayText;
  cashInDrawer.innerHTML = "<h2>Change in drawer:</h2>";
  Object.keys(drawer).forEach(name => {
    cashInDrawer.innerHTML += `<p>${name}: $${(drawer[name]/100).toFixed(2)}</p>`;
  });

  cid = Object.entries(drawer).map(([name, amount]) => [name, amount / 100]);
}
