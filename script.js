document.addEventListener("DOMContentLoaded", function () {
    let totalAmount = localStorage.getItem("total") || 0;
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    // Update total spent
    if (document.getElementById("total")) {
        document.getElementById("total").textContent = totalAmount;
    }

    // Handle form submission for adding expenses
    if (document.getElementById("expenseForm")) {
        document.getElementById("expenseForm").addEventListener("submit", function (e) {
            e.preventDefault();
            let name = document.getElementById("expenseName").value;
            let amount = parseInt(document.getElementById("expenseAmount").value);

            if (name && amount) {
                expenses.push({ name, amount });
                totalAmount = parseInt(totalAmount) + amount;

                localStorage.setItem("expenses", JSON.stringify(expenses));
                localStorage.setItem("total", totalAmount);

                window.location.href = "index.html";
            }
        });
    }

    // Show expense history
    if (document.getElementById("expenseList")) {
        let expenseList = document.getElementById("expenseList");
        expenses.forEach(expense => {
            let li = document.createElement("li");
            li.textContent = `${expense.name} - ₹${expense.amount}`;
            expenseList.appendChild(li);
        });
    }
});
