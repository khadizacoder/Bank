const addMoneyBtn = document.getElementById('addMoneyBtn');
const mainBalance = document.getElementById('mainBalance');

addMoneyBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const inputAccountNum = document.getElementById('inputAccountNum').value;
    const inputAmount = document.getElementById('inputAmount').value;
    const convertAmount = parseFloat(inputAmount)
    const inputPin = document.getElementById('inputPin').value;
    const convertPin = parseInt(inputPin);

    if (inputAccountNum.length === 11) {
        if (inputAmount !== '' && convertAmount >= 100 ) {
           if (convertPin === 1234) {
                const currentBalance = parseFloat(mainBalance.innerText);
                mainBalance.innerText = (currentBalance + convertAmount).toFixed(2);
                
           } else {
                alert('Enter valid PIN');
           }
        } else {
            alert('Enter amount')
        }
    } else {
        alert('Enter valid account number');
    }

})