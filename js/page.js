// box element
const addMoneyBox = document.getElementById('addMoneyBox');
const cashoutBox = document.getElementById('cashoutBox');
const transferMoneyBox = document.getElementById('transferMoneyBox');
const getBonusBox = document.getElementById('getBonusBox');
const payBillBox = document.getElementById('payBillBox');
const transactionsBox = document.getElementById('transactionsBox');

// section element
const latestPayment = document.getElementById('latestPayment');
const addMoney = document.getElementById('addMoney');
const cashout = document.getElementById('cashout');
const transferMoney = document.getElementById('transferMoney');
const getBonus = document.getElementById('getBonus');
const payBill = document.getElementById('payBill');

addMoney.style.display = 'none';
cashout.style.display = 'none';
transferMoney.style.display = 'none';
getBonus.style.display = 'none';
payBill.style.display = 'none';

addMoneyBox.addEventListener('click', () => {
    addMoneyBox.classList.add('border-blue-500', 'border');
    cashoutBox.classList.remove('border-blue-500', 'border');
    transferMoneyBox.classList.remove('border-blue-500', 'border');
    getBonusBox.classList.remove('border-blue-500', 'border');
    payBillBox.classList.remove('border-blue-500', 'border');
    transactionsBox.classList.remove('border-blue-500', 'border');

    latestPayment.style.display = 'none';
    addMoney.style.display = 'block'
    cashout.style.display = 'none';
    transferMoney.style.display = 'none'
    getBonus.style.display = 'none'
    payBill.style.display = 'none'
});

cashoutBox.addEventListener('click', (event) => {
    cashoutBox.classList.add('border-blue-500', 'border');
    addMoneyBox.classList.remove('border-blue-500', 'border');
    transferMoneyBox.classList.remove('border-blue-500', 'border');
    getBonusBox.classList.remove('border-blue-500', 'border');
    payBillBox.classList.remove('border-blue-500', 'border');
    transactionsBox.classList.remove('border-blue-500', 'border');

    cashout.style.display = 'block';
    latestPayment.style.display = 'none';
    addMoney.style.display = 'none';
    transferMoney.style.display = 'none';
    getBonus.style.display = 'none';
    payBill.style.display = 'none';
})

transferMoneyBox.addEventListener('click', () => {
    transferMoneyBox.classList.add('border-blue-500', 'border');
    addMoneyBox.classList.remove('border-blue-500', 'border');
    cashoutBox.classList.remove('border-blue-500', 'border');
    getBonusBox.classList.remove('border-blue-500', 'border');
    payBillBox.classList.remove('border-blue-500', 'border');
    transactionsBox.classList.remove('border-blue-500', 'border');

    transferMoney.style.display = 'block';
    latestPayment.style.display = 'none';
    addMoney.style.display = 'none';
    cashout.style.display = 'none';
    getBonus.style.display = 'none';
    payBill.style.display = 'none';
})

getBonusBox.addEventListener('click', () => {
    getBonusBox.classList.add('border-blue-500', 'border');
    transferMoneyBox.classList.remove('border-blue-500', 'border');
    addMoneyBox.classList.remove('border-blue-500', 'border');
    cashoutBox.classList.remove('border-blue-500', 'border');
    payBillBox.classList.remove('border-blue-500', 'border');
    transactionsBox.classList.remove('border-blue-500', 'border');

    getBonus.style.display = 'block';
    transferMoney.style.display = 'none';
    latestPayment.style.display = 'none';
    addMoney.style.display = 'none';
    cashout.style.display = 'none';
    payBill.style.display = 'none';
})

payBillBox.addEventListener('click', () => {
    payBillBox.classList.add('border-blue-500', 'border');
    getBonusBox.classList.remove('border-blue-500', 'border');
    transferMoneyBox.classList.remove('border-blue-500', 'border');
    addMoneyBox.classList.remove('border-blue-500', 'border');
    cashoutBox.classList.remove('border-blue-500', 'border');
    transactionsBox.classList.remove('border-blue-500', 'border');

    payBill.style.display = 'block';
    getBonus.style.display = 'none';
    transferMoney.style.display = 'none';
    latestPayment.style.display = 'none';
    addMoney.style.display = 'none';
    cashout.style.display = 'none';
})

transactionsBox.addEventListener('click', () => {
    transactionsBox.classList.add('border-blue-500', 'border');
    payBillBox.classList.remove('border-blue-500', 'border');
    getBonusBox.classList.remove('border-blue-500', 'border');
    transferMoneyBox.classList.remove('border-blue-500', 'border');
    addMoneyBox.classList.remove('border-blue-500', 'border');
    cashoutBox.classList.remove('border-blue-500', 'border');

    payBill.style.display = 'none';
    getBonus.style.display = 'none';
    transferMoney.style.display = 'none';
    latestPayment.style.display = 'block';
    addMoney.style.display = 'none';
    cashout.style.display = 'none';
})