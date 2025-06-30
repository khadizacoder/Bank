const getBonusBtn = document.getElementById('getBonusBtn');

getBonusBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const getBonusCoupon = document.getElementById('getBonusCoupon').value;
    const convertBonus = parseFloat(getBonusCoupon);
    const balance = parseFloat(mainBalance.innerText);

    if (getBonusCoupon !== '') {
        const couponAdd = (balance + 100).toFixed(2);
        mainBalance.innerText = couponAdd;
    } else {
        alert('Invalid Coupon code')
    }
})