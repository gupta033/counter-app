const decrementBtn=document.getElementById("decrementBtn");
const incrementBtn=document.getElementById("incrementBtn");
const resetBtn=document.getElementById("resetBtn");
const displayValue=document.getElementById("displayValue");

//click decrement value
decrementBtn.addEventListener("click",()=> {
    const value= Number(displayValue.innerText);
    if(value>0){
        displayValue.innerText=value-1;
    }
    else{
        alert("Negative value not allowe");
    }
});
//click increment value

incrementBtn.addEventListener("click",() => {
    const value=Number(displayValue.innerText);
    if(value>=10){
        alert("10 + value are not allowe");

    }
    else{
        displayValue.innerText=value +1;
    }
});
resetBtn.addEventListener("click",() => {
    displayValue.innerText=0;
});