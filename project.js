let tipButton = document.querySelectorAll(".btn"); // [2] you can also indicate the index
let customInput = document.querySelector(".btn6");
let amountInput = document.getElementById("amount");
let peopleInput = document.getElementById("people");
let tipAmountDisplay = document.getElementById("tip_amount");
let totalAmountDisplay = document.getElementById("total_amount");
let resetButton = document.getElementById("reset");

let tipValue = 0;
let amountValue = 0;
let peopleValue = 1;

function calculateTip(){
    if(peopleValue === 0){
        alert("Number of People can't be zero");
        return;
    }

    let tipAmount = (tipValue * amountValue) / 100 / peopleValue;
    let totalAmount = (tipAmount * peopleValue + amountValue) / peopleValue;

    // Display our result in the browser
    tipAmountDisplay.innerHTML = `$${tipAmount.toFixed(2)}`;  // .toFixed is to change every number to 2 decimal place
    totalAmountDisplay.innerHTML = `$${totalAmount.toFixed(2)}`;
}

amountInput.addEventListener("input", function () {
    amountValue = Number(amountInput.value);
    calculateTip();
})

peopleInput.addEventListener("input", function () {
    peopleValue = Number(peopleInput.value);
    calculateTip();
})

customInput.addEventListener("input", function () {
    tipValue = Number(customInput.value);
    calculateTip();
})
resetButton.addEventListener("click", function(e){
    amountInput.value = 0;
    peopleInput.value = 1;
    totalAmountDisplay.innerHTML = "$0.00";
    tipAmountDisplay.innerHTML = "$0.00";
    customInput.value = 0;
    tipButton.forEach( function (btn) {
        btn.classList.remove("active");
    })
    tipButton[2].classList.add("active");
    location.reload();
})

tipButton.forEach( function (btn) {
    btn.addEventListener("click", function (e) {
        tipValue = Number(btn.getAttribute("data-tip"))
        tipButton.forEach( function (button) {
            button.classList.remove ("active");
        })
        btn.classList.add("active");
        calculateTip();
    })
})

// let changeColor = document.getElementById("change");
//     changeColor.addEventListener("click", function(e){
//     //e.preventDefault();
//     document.getElementById("whole").style.backgroundColor = "aqua"; 
// })
// console.log(changeColor);

// onchange(changes after typing) and oninput(changes immediately you are typing) are similar
// document.getElementById("select").style.color = "red";