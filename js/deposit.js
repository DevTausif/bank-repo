document.getElementById('btn-deposit').addEventListener('click', function(){
   const depositField=document.getElementById('deposit-field');
   const newDepositAmountString=depositField.value;
   const newDepositAmount=parseFloat(newDepositAmountString);

   const depositTotalElement=document.getElementById('deposit-total');
   const previousDepositTotalString=depositTotalElement.innerText;
   const previousDepositTotal=parseFloat(previousDepositTotalString);

   const currentDeposit= previousDepositTotal + newDepositAmount;

   const balanceTotalElement= document.getElementById('balance-total');
   const previousBalanceTotalString=balanceTotalElement.innerText;
   const previousBalanceTotal=parseFloat(previousBalanceTotalString);

   const currentBalanceTotal=previousBalanceTotal + newDepositAmount;
   balanceTotalElement.innerText=currentBalanceTotal;


   depositTotalElement.innerText=currentDeposit;
   depositField.value= '';
    
})