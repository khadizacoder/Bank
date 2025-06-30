const payBillBtn = document.getElementById('payBillBtn');

payBillBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const payBillNum = document.getElementById('payBillNum').value;
    const payBillAmount = document.getElementById('payBillAmount').value;
    const convertBillAmount = parseFloat(payBillAmount);
    const payBillPin = document.getElementById('payBillPin').value;
    const convertPin = parseInt(payBillPin);
    const balance = parseFloat(mainBalance.innerText);

    if (payBillNum.length === 11) {
        if (convertBillAmount >= 100 && convertBillAmount <= balance) {
            if (convertPin === 1234) {
                const payAmount = balance - convertBillAmount;
                mainBalance.innerText = payAmount.toFixed(2);
            } else {
                alert('Enter valid PIN')
            }
        } else {
            alert('Enter valid amount')
        }
    } else {
        alert('Enter valid account number')
    }

})