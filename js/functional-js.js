function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const amountText = inputField.value;
    const amount = parseFloat(amountText);
    inputField.value = '';    
    return amount;
}


function totalValue(balanceId, amount) {
    debugger;
    const totalAmount = document.getElementById(balanceId);
    const totalAmountText = totalAmount.innerText;
    const previousTotalAmount = parseFloat(totalAmountText);

    totalAmount.innerText = previousTotalAmount + amount;    
}



document.getElementById('depositBtn').addEventListener('click', function(){

    const depositAmount = getInputValue('deposit-input');

    totalValue('deposit-balance', depositAmount)

    const balanceTotal = document.getElementById('balance-amount');
    const balanceTotalText = balanceTotal.innerHTML;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;

});


document.getElementById('withdrawBtn').addEventListener('click', function() {

    const withdrawAmount = getInputValue('withdraw-input');

    totalValue('withdraw-balance', withdrawAmount)

    const balanceTotal = document.getElementById('balance-amount');
    const balanceTotalText = balanceTotal.innerHTML;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;


})