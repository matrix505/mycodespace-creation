increaseBtn = document.getElementsByClassName("btn-increase")[0];
decreaseBtn = document.getElementsByClassName("btn-decrease")[0];
resetBtn = document.getElementsByClassName("btn-reset")[0];

counter = document.getElementById("counter");
counterValue = 0;
counter.innerHTML = counterValue;

increaseBtn.addEventListener("click", function() {
    counterValue++;
    counter.innerHTML = counterValue;
    });

decreaseBtn.addEventListener("click", function() {
    if (counterValue > 0) {
        counterValue--;
        counter.innerHTML = counterValue;   
    }}
);
resetBtn.addEventListener("click", function() {
    counterValue = 0;
    counter.innerHTML = counterValue;
    }
);
