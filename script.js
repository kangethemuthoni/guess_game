const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log('Random Number', randomNumber);  // Shows the chosen random number in the console 
    
function checkGuess() {

    let myGuess = guess.value;  
    // guess.value? The dot notation allows you to access data in objects. 
    // You access the property by using a dot followed by the name of the property you want to access

    if (myGuess == randomNumber) {

        feedback.textContent = "You got it right!"; // feedback.textContent returns the string where the p tag is

        } else if (myGuess > randomNumber && myGuess > 99) {

        feedback.textContent = "Your guess was " + myGuess + ". That's not a number between 1 and 100. Try Again!";

        } else if (myGuess > randomNumber) {

        feedback.textContent = "Your guess was " + myGuess + ". That's too high. Try Again!";

        } else if (myGuess < randomNumber && myGuess < 2) {

        feedback.textContent = "Your guess was " + myGuess + ". That's not a number between 1 and 100. Try Again!";

        } else if (myGuess < randomNumber) {

        feedback.textContent = "Your guess was " + myGuess + ". That's too low. Try Again!";

        } 
    }


submitGuess.addEventListener('click', checkGuess);  // buttonName.addEventListener(type, functionName)