let expenses = [];

// DOM elements
const expenseInput = document.getElementById('expenseInput');
const addBtn = document.getElementById('addBtn');
const totalExpense = document.getElementById('totalExpense');

// Add button event
addBtn.addEventListener('click', function() {
    const value = expenseInput.value.trim(); 

    // Validation
    if (value === '' || isNaN(value)) {
        alert('দয়া করে একটি বৈধ সংখ্যা লিখুন!');
        return;
    }

    const amount = parseFloat(value); 
    expenses.push(amount); 
    calculateTotal();     
    expenseInput.value = ''; 
    expenseInput.focus();    
});


// total calculation
function calculateTotal() {
    const total = expenses.reduce((sum, current) => sum + current, 0);
    totalExpense.textContent = total;
}

