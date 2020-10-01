let suits = ['&hearts;', '&diams;', '&clubs;', '&spades;'];
let numbers = ['A', '2', '3', '4', '5', '6', '7', '8'];

let number = document.getElementById('number');
number.innerHTML = numbers[Math.floor(Math.random() * numbers.length)];

let randomSuits = Math.floor(Math.random() * suits.length);



let topSuit = document.getElementById('Tsuit');
topSuit.innerHTML = suits[randomSuits];

if ((suits[randomSuits] === '&hearts;')|| (suits[randomSuits] === '&diams;')){ 
    Tsuit.style.color = 'red';
} else {
    Tsuit.style.color = 'black';
}


let bottomSuit = document.getElementById('Bsuit');
bottomSuit.innerHTML = suits[randomSuits];
if ((suits[randomSuits] === '&hearts;')|| (suits[randomSuits] === '&diams;')){

    Bsuit.style.color = 'red';
 }else {
    Bsuit.style.color = 'black';
}





