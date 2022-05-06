const addBtn = document.getElementById("add-btn");
const nameInput = document.getElementById("name-input");
const dateInput = document.getElementById("date-input");
const amountInput = document.getElementById("amount-input");
const errorP = document.getElementById("error");
const dataTable = document.getElementById("table");
const tableBody = document.getElementById("tbody");
const nameTableData = document.getElementById("name-td");
const dateTableData = document.getElementById("date-td");
const amountTableData = document.getElementById("amount-td");
const buttonTableData = document.getElementById("button-td"); 


function addExpense() {
    let tr = document.createElement("tr");
    let name = document.createElement("td");
    let date = document.createElement("td");
    let amount = document.createElement("td");
    let buttonTd = document.createElement("td");
    let button = document.createElement("button");
    let buttonText = document.createTextNode("X")
    name.className = "name-value";
    date.className = "date-value";
    amount.className = "amount-value";
    buttonTd.className = "button-value";
    button.className = "removeButton";
    tableBody.appendChild(tr);
    tr.appendChild(name);
    tr.appendChild(date);
    tr.appendChild(amount);
    tr.appendChild(buttonTd);
    button.appendChild(buttonText)
    buttonTd.appendChild(button);
    name.textContent = nameInput.value;
    date.textContent = dateInput.value;
    amount.textContent = amountInput.value;
    nameInput.value = "";
    dateInput.value = "";
    amountInput.value = "";

    function removeExpense() {
        name.parentElement.remove();
    }

    button.addEventListener("click", function() {
        removeExpense()
    })

}

function error() {
    errorP.style.display = "flex";
    errorP.style.justifyContent = "center"
}

function removePlaceholders() {
    let name = nameInput.value;
    let date = dateInput.value;
    let amount = amountInput.value;
    if(nameInput.value === "" | dateInput.value === "" | amountInput.value === "") {
        error()
    } else {
        errorP.style.display = "none";
        nameTableData.parentElement.remove();
        addExpense();
    }

    //take table and add values to it
}

addBtn.addEventListener("click", function() {
    removePlaceholders()
})