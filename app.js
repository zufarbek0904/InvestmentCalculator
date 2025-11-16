document.getElementById("calculate").addEventListener("click", () => {
  const after = document.getElementById("after").value;
  const add = +document.getElementById("additional").value;
  const rate = document.getElementById("return-rate").value;
  const start = +document.getElementById("starting-amount").value;

  if (!after || !add || !rate || !start) return alert("Заполните все поля!");

  const months = after * 12;
  const monthlyRate = rate / 12;
  let balance = start;
  let totalAdd = 0;
  let totalProfit = 0;

  const tbody = document.querySelector(".accumulation-schedule tbody");
  tbody.innerHTML = "";

  for (let i = 1; i <= months; i++) {
    const profit = (balance * monthlyRate) / 100;
    totalProfit += profit;
    balance += profit + add;
    totalAdd += add;

    tbody.innerHTML += `
      <tr>
        <td>${i}</td>
        <td>${add.toFixed(2)} $</td>
        <td>${profit.toFixed(2)} $</td>
        <td>${balance.toFixed(2)} $</td>
      </tr>
    `;
  }

  document.getElementById("endBalance").textContent = balance.toFixed(2) + " $";
  document.getElementById("startBalance").textContent = start.toFixed(2) + " $";
  document.getElementById("totalContrib").textContent = totalAdd.toFixed(2) + " $";
  document.getElementById("totalInterest").textContent = totalProfit.toFixed(2) + " $";

  document.querySelector(".accumulation-schedule").style.display = "block";
});

// ==== ПЕРЕКЛЮЧЕНИЕ ТЁМНОЙ ТЕМЫ ====
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Light"
    : "🌙 Dark";

  localStorage.setItem("theme", document.body.classList.contains("dark"));
});

// Загружаем тему
if (localStorage.getItem("theme") === "true") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️ Light";
}

// ==== НАВИГАЦИЯ ====
function openPage(page) {
  document.querySelectorAll(".calculator").forEach(el => el.style.display = "none");
  document.getElementById(page).style.display = "block";
}









const display = document.getElementById('display');

    function appendValue(value) {
      display.value += value;
    }

    function clearDisplay() {
      display.value = '';
    }

    function fact(n) {
      n = Math.floor(n);
      if(n <= 1) return 1;
      return n * fact(n - 1);
    }

    function calculateResult() {
      try {
        let expression = display.value.replace(/%/g, '/100');
        let result = eval(expression);
        display.value = result;
      } catch (e) {
        display.value = 'Ошибка';
      }
    }

    function convertCurrency() {
      const rates = {
        USD: 1,
        EUR: 1.1,
        UZS: 12000
      };
      let amount = parseFloat(document.getElementById('currencyAmount').value);
      let from = document.getElementById('currencyFrom').value;
      let to = document.getElementById('currencyTo').value;

      if(isNaN(amount)) {
        document.getElementById('currencyResult').innerText = 'Введите сумму';
        return;
      }

      let converted = (amount / rates[from]) * rates[to];
      document.getElementById('currencyResult').innerText = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
    }