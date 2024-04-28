
const BalanceE1 = document.querySelector('#BalanceE1');
const moneyInput = document.querySelector(".inpt");
const incrementBtn = document.querySelector("#incrementBtn");
const decrementBtn = document.querySelector("#decrementBtn");
const showBtn = document.querySelector("#showBtn");
const list = document.querySelector("#list");

incrementBtn.addEventListener("click", () => {
    const currentBalance = parseFloat(BalanceE1.textContent);
    const incrementAmount = parseFloat(moneyInput.value);

    if (!isNaN(incrementAmount)) {
        const newBalance = currentBalance + incrementAmount;

        BalanceE1.textContent = newBalance.toFixed(2); s
    } else {
        alert("Məbləğ daxil etməmisiniz.");
    }
});

decrementBtn.addEventListener("click", () => {
    const currentBalance = parseFloat(BalanceE1.textContent);
    const decrementAmount = parseFloat(moneyInput.value);

        if (!isNaN(decrementAmount)&&currentBalance>=decrementAmount) {
        const newBalance = currentBalance - decrementAmount;

        // Display the new balance
        BalanceE1.textContent = newBalance.toFixed(2); 
    }
    else if (isNaN(decrementAmount))
    {
        alert("Məbləğ daxil etməmisiniz.");
    }
     else {
        alert("Kifayət qədər məbləğ yoxdur");
    }
});


showBtn.addEventListener("click", () => {
    
    const valueToShow = parseFloat(moneyInput.value);
    
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString(); 
    if (!isNaN(valueToShow)) {
        
        const newRow = document.createElement('tr');

        newRow.innerHTML = ` 
            <td>${list.childElementCount + 1}</td>
            <td>Nəğd</td>
            <td class="text-danger">${valueToShow.toFixed(2)}</td>
            <td>${formattedDate}</td>
        `;

        list.appendChild(newRow) ;
    }
    else {
      alert("Heç bir ödəniş yoxdur!");
    }
});



