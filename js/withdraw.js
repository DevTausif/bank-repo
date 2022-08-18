document.getElementById('btn-withdraw').addEventListener('click', function(){
  
  const withDrawField= document.getElementById('withdraw-field');
  const newWithDrawAmountString= withDrawField.value;
  const newWithDrawAmount=parseFloat(newWithDrawAmountString);
   
  withDrawField.value= '';

  if(isNaN(newWithDrawAmount)){
    alert('Please Enter Valid Number');
    return;
  }
  
  const withDrawTotalElement= document.getElementById('withdraw-total');
  const previousWithDrawTotalString= withDrawTotalElement.innerText;
  const previousWithDrawTotal=parseFloat(previousWithDrawTotalString);

  const balanceTotalElement= document.getElementById('balance-total');
  const previousBalanceTotalString=balanceTotalElement.innerText;
  previousBalanceTotal=parseFloat(previousBalanceTotalString);


  if(newWithDrawAmount > previousBalanceTotal){
        alert('Not Enough Money');
        return;
  }

  const currentWithDrawTotal=previousWithDrawTotal+newWithDrawAmount;
  withDrawTotalElement.innerText=currentWithDrawTotal;

  const newBalanceTotal= previousBalanceTotal - newWithDrawAmount;
  balanceTotalElement.innerText= newBalanceTotal;

})