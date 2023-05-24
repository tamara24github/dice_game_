// Dice  1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var dice1 = document.querySelector(".img1");
dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

// Dice  2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice2 = document.querySelector(".img2");
dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Heading 

var title = document.querySelector(".container h1");

if ( randomNumber1 > randomNumber2 ) {
  title.innerHTML = "Player 1 win";
} else if ( randomNumber1 < randomNumber2 ){
  title.innerHTML = "Player 2 win"
} else if ( randomNumber1 === randomNumber2 ) {
  title.innerHTML = "Refresh again"
}
