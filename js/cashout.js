const mainBalance1 = document.getElementById('mainBalance');
const withdrawMoneyBtn = document.getElementById('withdrawMoneyBtn');

const balanceParant = document.getElementById('balanceParant');

withdrawMoneyBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const inputAgentNum = document.getElementById('inputAgentNum').value;
    const cashoutAmount = document.getElementById('cashoutAmount').value;
    const convertAmount = parseFloat(cashoutAmount);
    const cashoutPin = document.getElementById('cashoutPin').value;
    const convertPin = parseInt(cashoutPin);
    const currentBalance = parseFloat(mainBalance1.innerText);

    if (inputAgentNum.length === 11) {
        if (convertAmount >= 100 && convertAmount <= currentBalance) {
            if (convertPin === 1234) {
                mainBalance1.innerText = (currentBalance - convertAmount).toFixed(2);
            } else {
                alert('Enter valid PIN')
            }
        } else {
            console.log('Enter amount')
        }
    } else {
        alert('Enter valid number');
    }
});