const inputAccountNum = document.getElementById('inputAccountNum');
const inputPin = document.getElementById('inputPin');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const accountNumValue = inputAccountNum.value;
    const pinValue = inputPin.value;
    const convertedPin = parseInt(pinValue);

    if (accountNumValue.length === 11) {
        if (convertedPin === 1234) {
            window.location.href = './main.html';
        } else {
            alert('Enter valid PIN number');
        }
    } else {
        alert('Enter valid account number');
    }
});