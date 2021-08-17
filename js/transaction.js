document.getElementById('depositBtn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    const depositTotal = document.getElementById('deposit-balance');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    depositTotal.innerText = previousDepositTotal + depositAmount;

    const balanceTotal = document.getElementById('balance-amount');
    const balanceTotalText = balanceTotal.innerHTML;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;

    depositInput.value = '';
    

});


document.getElementById('withdrawBtn').addEventListener('click', function() {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawInputText);

    const withdrawBalance = document.querySelector('#withdraw-balance');
    const previousWithdrawTotalText = withdrawBalance.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    
    withdrawBalance.innerText = previousWithdrawTotal + withdrawAmount;

    const balanceTotal = document.getElementById('balance-amount');
    const balanceTotalText = balanceTotal.innerHTML;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    withdrawInput.value = '';

})