// let num = document.querySelector('#number');
// num.addEventListener('click',start);
// function start(){
//     let number = prompt();
//     console.log(parseInt(number));
// }


let startButton = document.querySelector('#startButton');
let inputField = document.querySelector('#input');
inputField.disabled = true;
let startAgainButton = document.querySelector('#startAgainButton');
startAgainButton.disabled = true;



// eventListeners
startButton.addEventListener('click', play);
inputField.addEventListener('click', startGame);
startAgainButton.addEventListener('click',startAgain);



// functions
function play(e) {
    startButton.disabled = true;
    FirstrulesAlert();
    // startButton.disabled = false;

}

function FirstrulesAlert(e) {
    let card_body = document.querySelector('#card-body');
    let input_group = document.querySelector('#input-group');
    let first_rule = document.createElement('div');
    first_rule.className = 'alert alert-primary text-center';
    first_rule.setAttribute('role', 'alert');
    first_rule.appendChild(document.createTextNode(`After you have started the game you can't restart the game using start button!`));
    card_body.insertBefore(first_rule, input_group);
    setTimeout(() => {
        first_rule.remove();
        SecondrulesAlert()
    }, 5000);
    ;

}
function SecondrulesAlert(e) {
    let card_body = document.querySelector('#card-body');
    let input_group = document.querySelector('#input-group');
    let second_rule = document.createElement('div');
    second_rule.className = 'alert alert-primary text-center';
    second_rule.setAttribute('role', 'alert');
    second_rule.appendChild(document.createTextNode(`You have only three chances to guess the number. GOOD LUCK!`));
    card_body.insertBefore(second_rule, input_group);
    setTimeout(() => {
        second_rule.remove();
        inputField.disabled = false;
    }, 5000);

}

function startGame(e) {
    let low = 1;
    let high = 11;
    let correct_ans = getRandomInt(low, high);
    console.log(correct_ans);

    let i = 1;
    let win = false;

    function checkNumber() {
        let number = prompt('Enter a number from 1 to 10');
        let int_number = parseInt(number);
        inputField.value = int_number;

        if (int_number < correct_ans) {
            alert(`Attempt ${i}: Correct number is greater!

                 You have ${3 - i} remaining attempt`);
        } else if (int_number > correct_ans) {
            alert(`Attempt ${i}: Correct number is smaller!

                 You have ${3 - i} remaining attempt`);
        }
        else if(int_number === correct_ans){
            win = true;
            // alert('You win!');
            let card_body = document.querySelector('#card-body');
            let winner = document.createElement('div');
            winner.className = 'alert alert-success text-center mt-3';
            winner.id = 'winner';
            winner.setAttribute('role', 'alert');
            winner.appendChild(document.createTextNode(`YOU WIN THE GAME`));
            card_body.appendChild(winner);
        }

        i++;

        if (i <= 3 && !win) {
            checkNumber();
        }
    }
    checkNumber();

    inputField.disabled = true;
    if (win != true) {
        let card_body = document.querySelector('#card-body');
        // let input_group = document.querySelector('#input-group');
        let loser = document.createElement('div');
        loser.className = 'alert alert-danger text-center mt-3';
        loser.id = 'loser';
        loser.setAttribute('role', 'alert');
        loser.appendChild(document.createTextNode(`YOU LOSE THE GAME!`));
        card_body.appendChild(loser);
    }

    startAgainButton.disabled = false;

}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function startAgain(e){
    startAgainButton.disabled = true;
    inputField.value = '';
    let card_body = document.querySelector('#card-body');
    card_body.lastElementChild.parentElement.lastElementChild.remove();
    play();
}

