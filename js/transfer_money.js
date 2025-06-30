const mainBalance2 = document.getElementById('mainBalance');
const transferMoneyBtn = document.getElementById('transferMoneyBtn');

transferMoneyBtn.addEventListener('click', () => {
    const transferMoneyNum = document.getElementById('transferMoneyNum').value;
    const transferMoneyAmount = document.getElementById('transferMoneyAmount').value;
    const converTransferMoneyAmount = parseFloat(transferMoneyAmount);
    const transferMoneyPin = document.getElementById('transferMoneyPin').value;
    const convertPin = parseInt(transferMoneyPin);
    const convertMainBalance = parseFloat(mainBalance2.innerText);

    if (transferMoneyNum.length === 11) {
        if (converTransferMoneyAmount >= 100 && transferMoneyAmount <= convertMainBalance) {
            if (convertPin === 1234) {
                const transfer = convertMainBalance - converTransferMoneyAmount;
                mainBalance2.innerText = transfer.toFixed(2)
            } else {
                alert('Enter valid PIN')
            }
        } else {
            alert('Enter valid amount')
        }
    } else {
        alert('Enter valid account number');
    }

})