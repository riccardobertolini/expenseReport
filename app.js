// Variables to store budget, expenses, and savings
let dailyBudget = 0;
let totalExpenses = 0;
let savings = 0;

// Load data from localStorage if available
window.onload = function() {
  if (localStorage.getItem('dailyBudget')) {
    dailyBudget = parseFloat(localStorage.getItem('dailyBudget'));
    totalExpenses = parseFloat(localStorage.getItem('totalExpenses'));
    updateSummary();
  }
};

// Set Daily Budget
document.getElementById('set-budget').addEventListener('click', function() {
  const budgetInput = document.getElementById('daily-budget').value;
  
  if (budgetInput === '' || parseFloat(budgetInput) <= 0) {
    alert('Please enter a valid budget amount');
    return;
  }

  dailyBudget = parseFloat(budgetInput);
  totalExpenses = 0; // Reset expenses when a new budget is set
  saveToLocalStorage();
  updateSummary();
});

// Add an Expense
document.getElementById('add-expense').addEventListener('click', function() {
  const expenseName = document.getElementById('expense-name').value;
  const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

  if (expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
    alert('Please enter a valid expense');
    return;
  }

  totalExpenses += expenseAmount;
  saveToLocalStorage();
  updateSummary();
});

// Function to update the summary section
function updateSummary() {
  const remainingBudget = dailyBudget - totalExpenses;
  savings = remainingBudget > 0 ? remainingBudget : 0;

  document.getElementById('remaining-budget').textContent = remainingBudget.toFixed(2);
  document.getElementById('savings').textContent = savings.toFixed(2);
}

// Save data to localStorage
function saveToLocalStorage() {
  localStorage.setItem('dailyBudget', dailyBudget);
  localStorage.setItem('totalExpenses', totalExpenses);
}
