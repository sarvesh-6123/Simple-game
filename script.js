function isNumeric(str) {
    if (typeof str != "string") return false
    return !isNaN(str) && !isNaN(parseFloat(str))
}
function checkrand() {
    let given = document.getElementById("guessed-nums").value;
    let result = document.getElementById("result-text");
    let resText = "Sorry, you Lost ..!"
    let myGuess = parseInt(Math.random() * 10);
    if (given === "") {
        resText = "Please Enter a Number";
    }
    else if (!isNumeric(given)) {
        resText = "Please Enter a valid Number";
    }
    else {
        let x = parseInt(given);
        if (x > 10 || x < 0) {
            resText = "Enter Number between 0-10..!";
        }
        else if (x == myGuess) {
            resText = "You Won Just reload the Page..!";
        }
        console.log(x, myGuess);
    }
    let button = document.getElementById("click");
    button.style.display = 'None';
    result.innerHTML = resText;
}