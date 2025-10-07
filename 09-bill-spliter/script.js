// Select Elements
const billInput = document.querySelector('.amount');
const tipCards = document.querySelectorAll('.tip-card');
const customTipInput = document.querySelector('.custom-tip');
const numberOfPersonInput = document.querySelector('.number-of-person');
const generateBtn = document.querySelector('.generate-bill');
const resetBtn = document.querySelector('.reset');

// Output Elements
const tipAmountOutput = document.querySelector('.tip-amount-output');
const totalBillOutput = document.querySelector('.total-output');
const eachPersonBillOutput = document.querySelector('.each-person-bill');

let selectedTipPercent = 0;

// Handle Tip Card Click
tipCards.forEach(card => {
    card.addEventListener('click', () => {
        tipCards.forEach(c => c.classList.remove('tip-card-selected'));
        card.classList.add('tip-card-selected');
        selectedTipPercent = parseInt(card.textContent);
        customTipInput.value = ''; // clear custom input
    });
});

// Handle Custom Tip
customTipInput.addEventListener('input', () => {
    tipCards.forEach(c => c.classList.remove('tip-card-selected'));
    selectedTipPercent = parseFloat(customTipInput.value) || 0;
});

// Generate Bill Calculation
generateBtn.addEventListener('click', () => {
    const bill = parseFloat(billInput.value);
    const numPersons = parseInt(numberOfPersonInput.value);

    if (isNaN(bill) || bill <= 0) {
        alert('Please enter a valid bill amount.');
        return;
    }
    if (isNaN(numPersons) || numPersons <= 0) {
        alert('Please enter a valid number of persons.');
        return;
    }

    const tipAmount = (bill * selectedTipPercent) / 100;
    const totalBill = bill + tipAmount;
    const eachPersonBill = totalBill / numPersons;

    tipAmountOutput.innerText = `₹${tipAmount.toFixed(2)}`;
    totalBillOutput.innerText = `₹${totalBill.toFixed(2)}`;
    eachPersonBillOutput.innerText = `₹${eachPersonBill.toFixed(2)}`;
});

// Reset Function
resetBtn.addEventListener('click', () => {
    billInput.value = '';
    customTipInput.value = '';
    numberOfPersonInput.value = '';
    tipAmountOutput.innerText = '₹0';
    totalBillOutput.innerText = '₹0';
    eachPersonBillOutput.innerText = '₹0';
    selectedTipPercent = 0;
    tipCards.forEach(c => c.classList.remove('tip-card-selected'));
});
