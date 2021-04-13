let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomImage1 = `./images/dice${randomNumber1}.png`;

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImage2 = `./images/dice${randomNumber2}.png`;

if (randomNumber1) {
    document.querySelector(".img1").setAttribute("src", randomImage1);
};
if (randomNumber2) {
    document.querySelector(".img2").setAttribute("src", randomImage2);
};

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🏆Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins 🏆";
};