 const button = document.querySelector("#calculate");
      const after = document.getElementById("after");
      const additional = document.getElementById("additional");
      const returnRate = document.getElementById("return-rate");
      const startingAmount = document.getElementById("starting-amount");
      const endBalance = document.getElementById("endBalance");
      const startBalance = document.getElementById("startBalance");
      const totalContrib = document.getElementById("totalContrib");
      const totalInterest = document.getElementById("totalInterest");
      const table = document.querySelector(".accumulation-schedule");
      const langSelect = document.getElementById("lang");

      const hisobla = () => {
        if (
          after.value &&
          additional.value &&
          returnRate.value &&
          startingAmount.value
        ) {
          table.style.display = "block";

          const months = after.value * 12;
          const monthlyRate = returnRate.value / 12;
          const add = +additional.value;
          const start = +startingAmount.value;
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
              </tr>`;
          }

          endBalance.textContent = balance.toFixed(2) + " $";
          startBalance.textContent = start.toFixed(2) + " $";
          totalContrib.textContent = totalAdd.toFixed(2) + " $";
          totalInterest.textContent = totalProfit.toFixed(2) + " $";
        } else {
          alert("Пожалуйста, заполните все поля!");
        }
      };
      button.addEventListener("click", hisobla);

      const changeLanguage = (lang) => {
        document.querySelectorAll("[data-ru]").forEach((el) => {
          el.textContent = el.getAttribute(`data-${lang}`);
        });
        localStorage.setItem("lang", lang);
      };

      langSelect.addEventListener("change", () => {
        changeLanguage(langSelect.value);
      });

      const savedLang = localStorage.getItem("lang") || "ru";
      langSelect.value = savedLang;
      changeLanguage(savedLang);